import { isIDCardNo } from "../src/index";
import { expect } from "chai";
import "mocha";

describe("checkIDCardNo", function() {
  it("isIDCardNo must be success", done => {
    ["330683180001017218"].map(m => {
      expect(isIDCardNo(m).success).to.be.true;
    });

    done();
  });

  it("isIDCardNo not IDCardNo", done => {
    [
      "12345", // 位数太少
      "333333333333333333" // 位数太多
    ].map(m => {
      let result = isIDCardNo(m);

      expect(result.success).to.be.false;
      expect(result.error.code === "ERROR_NOT_IDCARD").to.be.true;
    });
    done();
  });


  it("isIDCardNo can null", done => {
    expect(isIDCardNo("", { canEmpty: true }).success).to.be.true;
    expect(isIDCardNo(null, { canNull: true }).success).to.be.true;
    expect(isIDCardNo(undefined, { canNull: true }).success).to.be.true;

    expect(isIDCardNo("").success).to.be.false;
    expect(isIDCardNo(null).success).to.be.false;
    expect(isIDCardNo(undefined).success).to.be.false;

    done();
  });
});
