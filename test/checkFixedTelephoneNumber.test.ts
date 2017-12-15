import { isFixedTelephoneNumber } from "../src/index";
import { expect } from "chai";
import "mocha";

describe("checkFixedTelephoneNumber", function() {
  it("isFixedTelephoneNumber must be success", done => {
    ["010-2345678-1234", "0575-88123456-012", "0571-88888888"].map(m => {
      expect(isFixedTelephoneNumber(m).success).to.be.true;
    });

    done();
  });

  it("isFixedTelephoneNumber not fixedTelephoneNumber", done => {
    [
      "12345", // 位数太少
      "1234567891" // 位数太多
    ].map(m => {
      let result = isFixedTelephoneNumber(m);

      expect(result.success).to.be.false;
      expect(result.error.code === "ERROR_NOT_TEL").to.be.true;
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
