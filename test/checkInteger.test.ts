import { isInteger } from "../src/index";
import { expect } from "chai";
import "mocha";

describe("checkInteger", function() {
  it("isInteger must be success", done => {
    for (let i = -1000; i < 1001; i++) {
      expect(isInteger(i.toString()).success).to.be.true;
    }

    done();
  });

  it("isInteger not int", done => {
    //不是整数
    ["a", "b", "c", "-1.0", "1.0", "0.0", ".1", "00", "000", "01", "001"].map(
      m => {
        let result = isInteger(m);
        let err = result.error;
        expect(result.success).to.be.false;
        expect(err && err.code === "ERROR_NOT_INT").to.be.true;
      }
    );

    ["", null, undefined].map(m => {
      let result = isInteger(m);
      let err = result.error;
      expect(result.success).to.be.false;
      expect(err && err.code === "ERROR_NOT_INT").to.be.true;

      result = isInteger(m, { canNullOrEmpty: true });
      expect(result.success).to.be.true;
    });

    done();
  });

  it("isInteger can null", done => {
    expect(isInteger("", { canEmpty: true }).success).to.be.true;
    expect(isInteger(null, { canNull: true }).success).to.be.true;
    expect(isInteger(undefined, { canNull: true }).success).to.be.true;

    expect(isInteger("").success).to.be.false;
    expect(isInteger(null).success).to.be.false;
    expect(isInteger(undefined).success).to.be.false;

    done();
  });

  it("isInteger min and max", done => {
    expect(isInteger("0", { min: 0, max: 0 }).success).to.be.true;
    expect(isInteger("0", { min: -100, max: 100 }).success).to.be.true;

    ["-100", "-10", "-2", "-1", "0", "1", "2", "10", "100"].map(m => {
      let result = isInteger(m, { min: 101 });
      let err = result.error;
      expect(result.success).to.be.false;
      expect(err && err.code === "ERROR_MIN").to.be.true;
    });

    ["-100", "-10", "-2", "-1", "0", "1", "2", "10", "100"].map(m => {
      let result = isInteger(m, { max: -101 });
      let err = result.error;
      expect(result.success).to.be.false;
      expect(err && err.code === "ERROR_MAX").to.be.true;
    });

    done();
  });
});
