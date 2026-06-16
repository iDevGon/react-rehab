import { delay, HttpResponse, http } from "msw";

export type ProfileResponse = {
  email: string;
  id: string;
  name: string;
  project: string;
};

export type ProfileErrorResponse = {
  error: {
    code: "PROFILE_UNAVAILABLE";
    message: string;
  };
};

const profile: ProfileResponse = {
  email: "ada@example.com",
  id: "profile_ada",
  name: "Ada Lovelace",
  project: "analytical-engine"
};

export const handlers = [
  http.get("/api/profile", async ({ request }) => {
    const url = new URL(request.url);

    await delay(100);

    if (url.searchParams.get("fail") === "true") {
      return HttpResponse.json(
        {
          error: {
            code: "PROFILE_UNAVAILABLE",
            message: "Could not load profile"
          }
        },
        { status: 500 }
      );
    }

    return HttpResponse.json(profile);
  })
];
