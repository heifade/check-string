import { BuildConfig } from "happywork-node-builder";

const config: BuildConfig = {
  input: {
    index: "src/index.ts"
  },
  output: [
    {
      dir: "lib",
      format: "cjs"
    },
    {
      dir: "es",
      format: "es"
    }
  ],
  external: [],
  mini: false
};

export default config;
