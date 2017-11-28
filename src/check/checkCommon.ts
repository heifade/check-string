import { CheckParamsBase } from "../checkParamsBase";
import { CheckResult } from "../checkResult";
import { isNull, isEmpty } from "../util";

/**
 * <pre>
 * 内部方法。
 * 检查是否允许为空
 * </pre>
 *
 * @export
 * @param {string} value
 * @param {CheckParamsBase} [params]
 * @returns {CheckResult}
 */
export function checkCanNullOrEmpty(
  value: string,
  params?: CheckParamsBase
): CheckResult {
  if (params) {
    if (isNull(value)) {
      // 值为空时
      if (params.canNull || params.canNullOrEmpty) {
        // 验证要求可以为空
        return new CheckResult(true);
      } else {
        //验证要求不可以为空
        return new CheckResult(false, {
          code: `ERROR_CANNOT_NULL`,
          en: `can not be empty`,
          cn: `不能为空`
        });
      }
    } else if (isEmpty(value)) {
      // 值为空字符串时
      if (params.canEmpty || params.canNullOrEmpty) {
        return new CheckResult(true);
      } else {
        return new CheckResult(false, {
          code: `ERROR_CANNOT_EMPTY`,
          en: `can not be empty`,
          cn: `不能为空`
        });
      }
    }
  }

  return null;
}

/**
 * <pre>
 * 内部访法
 * 校验正则表达式数组，所有正则都通过返回true
 * </pre>
 *
 * @export
 * @param {Array<any>} regList
 * @param {string} value
 * @returns
 */
export function checkRegs(regList: Array<any>, value: string) {
  for (let reg of regList) {
    if (reg.test(value)) {
      return true;
    }
  }
  return false;
}

/**
 * 检查最大值是否满足要求
 *
 * @export
 * @param {string} value
 * @param {number} max
 * @returns
 */
export function checkMaxValue(value: string, max: number) {
  let valueOfInt = Number(value);
  if (!isNull(max)) {
    if (valueOfInt > max) {
      return new CheckResult(false, {
        code: "ERROR_MAX",
        en: `can not be more than ${max}`,
        cn: `不能大于${max}`
      });
    }
  }
  return null;
}

/**
 * 检查最小值是否满足要求
 *
 * @export
 * @param {string} value
 * @param {number} min
 * @returns
 */
export function checkMinValue(value: string, min: number) {
  let valueOfInt = Number(value);
  if (!isNull(min)) {
    if (valueOfInt < min) {
      return new CheckResult(false, {
        code: "ERROR_MIN",
        en: `can not be less than ${min}`,
        cn: `不能小于${min}`
      });
    }
  }
  return null;
}
