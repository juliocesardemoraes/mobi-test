import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://mobi-test-green.vercel.app/",
  },
});
