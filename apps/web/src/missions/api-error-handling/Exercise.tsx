import { useState } from "react";

type Profile = {
  email: string;
  id: string;
  name: string;
  project: string;
};

async function requestProfile(shouldFail: boolean): Promise<Profile> {
  const response = await fetch(`/api/profile${shouldFail ? "?fail=true" : ""}`);

  if (!response.ok) {
    throw new Error("Could not load profile");
  }

  return response.json() as Promise<Profile>;
}

export default function Exercise() {
  const [shouldFail, setShouldFail] = useState(false);

  function loadProfile() {
    void requestProfile(shouldFail).catch(() => undefined);
  }

  return (
    <section aria-labelledby="api-title">
      <h2 id="api-title">Profile Loader</h2>

      <label>
        <input
          checked={shouldFail}
          onChange={(event) => setShouldFail(event.target.checked)}
          type="checkbox"
        />
        Make next request fail
      </label>

      <div>
        <button onClick={loadProfile} type="button">
          Load profile
        </button>
        <button onClick={loadProfile} type="button">
          Retry
        </button>
      </div>

      <p role="status">No profile loaded.</p>
    </section>
  );
}
