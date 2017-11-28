import { isPhoneNumber } from "../src/index";
import { expect } from "chai";
import "mocha";

describe("checkPhoneNumber", function() {
  it("isPhoneNumber must be success", done => {
    ["15912345678"].map(m => {
      expect(isPhoneNumber(m).success).to.be.true;
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
