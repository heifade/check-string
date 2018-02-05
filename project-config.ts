import { ProjectConfigModel } from "pcreate-config";

let projectConfig = {
  projectType: "node",
  compile: [
    {
      outDir: "./es/",
      module: "commonjs",
      target: "es5",
      lib: ["es2015", "es2015.promise", "es2015.symbol"],
      declaration: true
    },
    {
      outDir: "./lib/",
      module: "amd",
      target: "es5",
      lib: ["es2015", "es2015.promise", "es2015.symbol"],
      declaration: true
    }
  ],
  command: false,
  documents: true,
  unitTest: true,
  sourceInclude: ["./src/**/*"]
};

export default projectConfig;
