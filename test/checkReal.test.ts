import { isReal } from "../src/index";
import { expect } from "chai";
import "mocha";

describe("checkReal", function() {
  it("isReal must be success", done => {
    for (let i = -100; i < 101; i += 0.1) {
      let v = i.toFixed(2);
      if (v === "-0.00") {
        v = "0.00";
      }
      expect(isReal(v).success).to.be.true;
      expect(isReal(i).success).to.be.true;
    }

    done();
  });

  it("isReal not float", done => {
    //不是浮点数
    ["a", "b", "c", "00", "000", "01", "001", "-0.0", "-0", "-00.00"].map(m => {
      let result = isReal(m);
      let err = result.error;
      expect(result.success).to.be.false;
      expect(err && err.code === "ERROR_NOT_REAL").to.be.true;
    });

    ["", null, undefined].map(m => {
      let result = isReal(m);
      let err = result.error;
      expect(result.success).to.be.false;
      expect(err && err.code === "ERROR_NOT_REAL").to.be.true;

      result = isReal(m, { canNullOrEmpty: true });
      expect(result.success).to.be.true;
    });

    done();
  });

  it("isReal can null", done => {
    expect(isReal("", { canEmpty: true }).success).to.be.true;
    expect(isReal(null, { canNull: true }).success).to.be.true;
    expect(isReal(undefined, { canNull: true }).success).to.be.true;

    expect(isReal("").success).to.be.false;
    expect(isReal(null).success).to.be.false;
    expect(isReal(undefined).success).to.be.false;

    done();
  });

  it("isReal min and max", done => {
    expect(isReal("0.0", { min: 0, max: 0 }).success).to.be.true;
    expect(isReal("0.0", { min: -100, max: 100 }).success).to.be.true;

    ["-100.0", "-10.0", "-2.0", "-1.0", "0.0", "1.0", "2.0", "10.0", "100.0"].map(m => {
      let result = isReal(m, { min: 101 });
      let err = result.error;
      expect(result.success).to.be.false;
      expect(err && err.code === "ERROR_MIN").to.be.true;
    });

    ["-100.0", "-10.0", "-2.0", "-1.0", "0.0", "1.0", "2.0", "10.0", "100.0"].map(m => {
      let result = isReal(m, { max: -101 });
      let err = result.error;
      expect(result.success).to.be.false;
      expect(err && err.code === "ERROR_MAX").to.be.true;
    });

    done();
  });

  it("isReal decimals", done => {
    expect(isReal("1", { decimals: 2 }).success).to.be.true;
    expect(isReal("1.1", { decimals: 2 }).success).to.be.true;
    expect(isReal("1.12", { decimals: 2 }).success).to.be.true;

    let result = isReal("1.123", { decimals: 2 });
    let err = result.error;
    expect(result.success).to.be.false;
    expect(err && err.code === "ERROR_DECIMAL_DIGITS").to.be.true;

    done();
  });
});
