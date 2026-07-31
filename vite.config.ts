import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// Vitest reads this same config, so tests resolve modules exactly as dev and
// build do rather than through a second setup that can drift from it.
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test-setup.ts"],
  },
});
