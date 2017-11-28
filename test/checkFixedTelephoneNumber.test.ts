import { isFixedTelephoneNumber } from "../src/index";
import { expect } from "chai";
import "mocha";

describe("checkFixedTelephoneNumber", function() {
  it("isFixedTelephoneNumber must be success", done => {
    ["010-2345678-1234"].map(m => {
      expect(isFixedTelephoneNumber(m).success).to.be.true;
    });

    done();
  });


  it("isFixedTelephoneNumber can null", done => {
    expect(isFixedTelephoneNumber("", { canEmpty: true }).success).to.be.true;
    expect(isFixedTelephoneNumber(null, { canNull: true }).success).to.be.true;
    expect(isFixedTelephoneNumber(undefined, { canNull: true }).success).to.be.true;

    expect(isFixedTelephoneNumber("").success).to.be.false;
    expect(isFixedTelephoneNumber(null).success).to.be.false;
    expect(isFixedTelephoneNumber(undefined).success).to.be.false;

    done();
  });
});
