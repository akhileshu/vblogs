import { defineConfig } from "cypress";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {},
    env: {
      NEXT_PUBLIC_CYPRESS_NEXT_AUTH_SESSION_TOKEN_AUTHOR:
        process.env.NEXT_PUBLIC_CYPRESS_NEXT_AUTH_SESSION_TOKEN_AUTHOR,
    },
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
