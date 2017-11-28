import { isEmail } from "../src/index";
import { expect } from "chai";
import "mocha";

describe("checkEmail", function() {
  it("isEmail must be success", done => {
    ["ab@126.com", "1@1.com"].map(m => {
      expect(isEmail(m).success).to.be.true;
    });

    done();
  });

  it("isEmail not email", done => {
    [
      "heifade.12@126.com", // 不通过，名字中出现"."
      "嗨heifade12@126.com",// 不通过，名字中出现汉字
      "heifade@12@126.com", // 不通过，名字中出现“@”
      "heifade12126.com",   // 不通过，缺少“@”
      "heifade12126@.com"   // 不通过，“@”后面没有域名
    ].map(m => {
      let result = isEmail(m);

      expect(result.success).to.be.false;
      expect(result.error.code === "ERROR_NOT_EMAIL").to.be.true;
    });
    done();
  });

  it("isEmail can null", done => {
    expect(isEmail("", { canEmpty: true }).success).to.be.true;
    expect(isEmail(null, { canNull: true }).success).to.be.true;
    expect(isEmail(undefined, { canNull: true }).success).to.be.true;

    expect(isEmail("").success).to.be.false;
    expect(isEmail(null).success).to.be.false;
    expect(isEmail(undefined).success).to.be.false;

    expect(isEmail("", { canEmpty: false }).success).to.be.false;
    expect(isEmail(null, { canNull: false }).success).to.be.false;
    expect(isEmail(undefined, { canNull: false }).success).to.be.false;

    done();
  });
});
