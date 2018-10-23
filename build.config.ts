import { BuildConfig } from "happywork-node-builder";

const config: BuildConfig = {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      file: "check-string-es.js",
      format: "es"
    },
    {
      dir: "dist",
      file: "check-string-cjs.js",
      format: "cjs"
    }
  ],
  external: [],
  mini: false
};

export default config;
