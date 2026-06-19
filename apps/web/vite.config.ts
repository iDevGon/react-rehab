import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import MissionReporter from "./src/test/missionReporter";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    reporters: ["default", new MissionReporter()],
    setupFiles: "./src/test/setup.ts"
  }
});
