import { isPhoneNumber } from "../src/index";
import { expect } from "chai";
import "mocha";

describe("checkPhoneNumber", function() {
  it("isPhoneNumber must be success", done => {
    ["15912345678", "16612345678", "19911111111", "19811111111"].map(m => {
      expect(isPhoneNumber(m).success).to.be.true;
    });

    done();
  });

  it("isPhoneNumber not phoneNumber", done => {
    [
      "159111111111", // 多了一位
      "1591111111", // 少了一位
      "15911111111a" //出现字母
    ].map(m => {
      let result = isPhoneNumber(m);

      expect(result.success).to.be.false;
      expect(result.error.code === "ERROR_NOT_PHONE").to.be.true;
    });
    done();
  });

  it("isPhoneNumber can null", done => {
    expect(isPhoneNumber("", { canEmpty: true }).success).to.be.true;
    expect(isPhoneNumber(null, { canNull: true }).success).to.be.true;
    expect(isPhoneNumber(undefined, { canNull: true }).success).to.be.true;

    expect(isPhoneNumber("").success).to.be.false;
    expect(isPhoneNumber(null).success).to.be.false;
    expect(isPhoneNumber(undefined).success).to.be.false;

    done();
  });
});
