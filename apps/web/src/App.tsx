import { getMissionBundle, type Locale } from "@react-rehab/missions";
import { useMemo, useState } from "react";
import { getMissions } from "./missions/registry";

export default function App() {
  const [locale, setLocale] = useState<Locale>("en");
  const bundle = getMissionBundle(locale);
  const copy = bundle.app;
  const missions = useMemo(() => getMissions(locale), [locale]);
  const [selectedId, setSelectedId] = useState(missions[0]?.id ?? "");
  const [reviewedIds, setReviewedIds] = useState<string[]>([]);

  const selectedMission = useMemo(
    () => missions.find((mission) => mission.id === selectedId) ?? missions[0],
    [missions, selectedId]
  );

  if (!selectedMission) {
    return <main className="empty-app">{copy.noMissions}</main>;
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
          <p className="eyebrow">{copy.appEyebrow}</p>
          <h1>{copy.appTitle}</h1>
          <p>{copy.appSummary}</p>
        </div>

        <div className="language-switcher" aria-label={copy.languageLabel}>
          <button
            aria-pressed={locale === "en"}
            onClick={() => setLocale("en")}
            type="button"
          >
            {copy.english}
          </button>
          <button
            aria-pressed={locale === "ko"}
            onClick={() => setLocale("ko")}
            type="button"
          >
            {copy.korean}
          </button>
        </div>

        <nav aria-label={copy.navLabel} className="mission-nav">
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
                  <span>{isReviewed ? copy.reviewed : mission.summary}</span>
                </span>
              </button>
            );
          })}
        </nav>

        <p className="progress">
          {reviewedIds.length} / {missions.length} {copy.progressReviewed}
        </p>
      </aside>

      <main className="mission-panel">
        <section className="mission-header" aria-labelledby="mission-title">
          <div>
            <p className="eyebrow">{copy.currentMission}</p>
            <h2 id="mission-title">{selectedMission.title}</h2>
            <p>{selectedMission.summary}</p>
          </div>
          <button
            className="review-button"
            disabled={reviewed}
            onClick={markReviewed}
            type="button"
          >
            {reviewed ? copy.reviewed : copy.markReviewed}
          </button>
        </section>

        <section className="info-grid" aria-label={copy.missionDetails}>
          <InfoCard title={copy.requirements} items={selectedMission.requirements} />
          <InfoCard
            title={copy.manualVerification}
            items={selectedMission.verification}
          />
          <InfoCard title={copy.retrospective} locked={!reviewed}>
            {reviewed ? (
              <ul>
                {selectedMission.retrospective.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>
                {copy.retrospectiveLocked}
              </p>
            )}
          </InfoCard>
        </section>

        <section className="command-grid" aria-label={copy.missionWorkspace}>
          <InfoCard title={copy.testCommand}>
            <code>{selectedMission.testCommand}</code>
          </InfoCard>
          <InfoCard title={copy.targetFile}>
            <code>{selectedMission.targetFile}</code>
          </InfoCard>
        </section>

        <section className="preview-panel" aria-labelledby="preview-title">
          <div className="preview-heading">
            <p className="eyebrow">{copy.livePreview}</p>
            <h3 id="preview-title">{copy.exerciseSurface}</h3>
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
