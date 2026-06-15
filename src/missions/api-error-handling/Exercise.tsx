import { useState } from "react";

type Profile = {
  email: string;
  name: string;
};

function requestProfile(shouldFail: boolean): Promise<Profile> {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Request failed"));
        return;
      }

      resolve({ email: "ada@example.com", name: "Ada Lovelace" });
    }, 100);
  });
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
