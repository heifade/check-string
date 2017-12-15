import { isFloat } from "../src/index";
import { expect } from "chai";
import "mocha";

describe("checkFloat", function() {
  it("isFloat must be success", done => {
    for (let i = -100; i < 101; i += 0.1) {
      let v = i.toFixed(2);
      if (v === "-0.00") {
        v = "0.00";
      }
      expect(isFloat(v).success).to.be.true;
    }

    done();
  });

  it("isFloat not float", done => {
    //不是浮点数
    [
      "a",
      "b",
      "c",
      "-1",
      "1",
      "0",
      "00",
      "000",
      "01",
      "001",
      "-0.0",
      "-0",
      "-00.00"
    ].map(m => {
      let result = isFloat(m);
      let err = result.error;
      expect(result.success).to.be.false;
      expect(err && err.code === "ERROR_NOT_FLOAT").to.be.true;
    });

    ["", null, undefined].map(m => {
      let result = isFloat(m);
      let err = result.error;
      expect(result.success).to.be.false;
      expect(err && err.code === "ERROR_NOT_FLOAT").to.be.true;

      result = isFloat(m, { canNullOrEmpty: true });
      expect(result.success).to.be.true;
    });

    done();
  });

  it("isFloat can null", done => {
    expect(isFloat("", { canEmpty: true }).success).to.be.true;
    expect(isFloat(null, { canNull: true }).success).to.be.true;
    expect(isFloat(undefined, { canNull: true }).success).to.be.true;

    expect(isFloat("").success).to.be.false;
    expect(isFloat(null).success).to.be.false;
    expect(isFloat(undefined).success).to.be.false;

    done();
  });

  it("isFloat min and max", done => {
    expect(isFloat("0.0", { min: 0, max: 0 }).success).to.be.true;
    expect(isFloat("0.0", { min: -100, max: 100 }).success).to.be.true;

    [
      "-100.0",
      "-10.0",
      "-2.0",
      "-1.0",
      "0.0",
      "1.0",
      "2.0",
      "10.0",
      "100.0"
    ].map(m => {
      let result = isFloat(m, { min: 101 });
      let err = result.error;
      expect(result.success).to.be.false;
      expect(err && err.code === "ERROR_MIN").to.be.true;
    });

    [
      "-100.0",
      "-10.0",
      "-2.0",
      "-1.0",
      "0.0",
      "1.0",
      "2.0",
      "10.0",
      "100.0"
    ].map(m => {
      let result = isFloat(m, { max: -101 });
      let err = result.error;
      expect(result.success).to.be.false;
      expect(err && err.code === "ERROR_MAX").to.be.true;
    });

    done();
  });

  it("isFloat decimals", done => {
    expect(isFloat("1.1", { decimals: 2 }).success).to.be.true;
    expect(isFloat("1.12", { decimals: 2 }).success).to.be.true;

    let result = isFloat("1.123", { decimals: 2 });
    let err = result.error;
    expect(result.success).to.be.false;
    expect(err && err.code === "ERROR_DECIMAL_DIGITS").to.be.true;

    done();
  });
});
