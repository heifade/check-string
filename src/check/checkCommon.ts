import { CheckParamsBase } from "../checkParamsBase";
import { CheckResult } from "../checkResult";

export function checkCommon(
  value: string,
  params?: CheckParamsBase
): CheckResult {
  if (params) {
    if (value === null || value === undefined) {
      // 值为空时
      if (params.canNull || params.canNullOrEmpty) {
        // 验证要求可以为空
        return new CheckResult(true, "");
      } else {
        //验证要求不可以为空
        return new CheckResult(false, "不允许为空");
      }
    } else if (value === "") {
      // 值为空字符串时
      if (params.canEmpty || params.canNullOrEmpty) {
        return new CheckResult(true, "");
      } else {
        return new CheckResult(false, "不允许为空");
      }
    }
  }

  return new CheckResult(false, "");
}

// 校验正则表达式数组，所有正则都通过返回true
export function checkRegs(regList: Array<any>, value: string) {
  for (let reg of regList) {
    if (reg.test(value)) {
      return true;
    }
  }
  return false;
}
