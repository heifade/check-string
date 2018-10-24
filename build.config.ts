import { BuildConfig } from "happywork-node-builder";

const config: BuildConfig = {
  input: {
    'check-string-es': "src/index.ts",
    // 'check-string-cjs': "src/index.ts",
  },
  output: [
    {
      dir: "dist",
      // file: "check-string-es.js",
      format: "cjs"
    },
    // {
    //   dir: "dist",
    //   // file: "check-string-cjs.js",
    //   format: "cjs"
    // }
  ],
  external: [],
  mini: false
};

export default config;
