import { useMemo, useState } from "react";
import { missions } from "./missions/registry";

export default function App() {
  const [selectedId, setSelectedId] = useState(missions[0]?.id ?? "");
  const [reviewedIds, setReviewedIds] = useState<string[]>([]);

  const selectedMission = useMemo(
    () => missions.find((mission) => mission.id === selectedId) ?? missions[0],
    [selectedId]
  );

  if (!selectedMission) {
    return <main className="empty-app">No missions configured.</main>;
  }

  const Exercise = selectedMission.Exercise;
  const reviewed = reviewedIds.includes(selectedMission.id);

  function markReviewed() {
    setReviewedIds((ids) =>
      ids.includes(selectedMission.id) ? ids : [...ids, selectedMission.id]
    );
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-heading">
          <p className="eyebrow">React Rehab</p>
          <h1>Mission Runner</h1>
          <p>
            Work through focused React missions, verify behavior, then reflect
            before moving on.
          </p>
        </div>

        <nav aria-label="Missions" className="mission-nav">
          {missions.map((mission, index) => {
            const active = mission.id === selectedMission.id;
            const isReviewed = reviewedIds.includes(mission.id);

            return (
              <button
                aria-current={active ? "page" : undefined}
                className={active ? "mission-button active" : "mission-button"}
                key={mission.id}
                onClick={() => setSelectedId(mission.id)}
                type="button"
              >
                <span className="mission-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mission-button-copy">
                  <span>{mission.title}</span>
                  <span>{isReviewed ? "Reviewed" : mission.summary}</span>
                </span>
              </button>
            );
          })}
        </nav>

        <p className="progress">
          {reviewedIds.length} / {missions.length} reviewed
        </p>
      </aside>

      <main className="mission-panel">
        <section className="mission-header" aria-labelledby="mission-title">
          <div>
            <p className="eyebrow">Current Mission</p>
            <h2 id="mission-title">{selectedMission.title}</h2>
            <p>{selectedMission.summary}</p>
          </div>
          <button
            className="review-button"
            disabled={reviewed}
            onClick={markReviewed}
            type="button"
          >
            {reviewed ? "Reviewed" : "Mark reviewed"}
          </button>
        </section>

        <section className="info-grid" aria-label="Mission details">
          <InfoCard title="Requirements" items={selectedMission.requirements} />
          <InfoCard
            title="Manual Verification"
            items={selectedMission.verification}
          />
          <InfoCard title="Retrospective" locked={!reviewed}>
            {reviewed ? (
              <ul>
                {selectedMission.retrospective.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>
                Locked until you mark the mission reviewed after testing and
                browser verification.
              </p>
            )}
          </InfoCard>
        </section>

        <section className="command-grid" aria-label="Mission workspace">
          <InfoCard title="Test Command">
            <code>{selectedMission.testCommand}</code>
          </InfoCard>
          <InfoCard title="Target File">
            <code>{selectedMission.targetFile}</code>
          </InfoCard>
        </section>

        <section className="preview-panel" aria-labelledby="preview-title">
          <div className="preview-heading">
            <p className="eyebrow">Live Preview</p>
            <h3 id="preview-title">Exercise Surface</h3>
          </div>
          <Exercise />
        </section>
      </main>
    </div>
  );
}

function InfoCard({
  children,
  items,
  locked = false,
  title
}: {
  children?: React.ReactNode;
  items?: string[];
  locked?: boolean;
  title: string;
}) {
  return (
    <article className={locked ? "info-card locked" : "info-card"}>
      <h3>{title}</h3>
      {items ? (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        children
      )}
    </article>
  );
}
