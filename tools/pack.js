var browserify = require("browserify");
var tsify = require("tsify");
var fs = require("fs");
var path = require("path");
var sourcePath = path.join(__dirname, "../src/checkValue.test.ts");
var targetPath = path.join(__dirname, "../out/bundle.js");

browserify()
  .add(sourcePath)
  .plugin("tsify", { noImplicitAny: true })
  .bundle()
  //.pipe(process.stdout);
  .pipe(fs.createWriteStream(targetPath));
