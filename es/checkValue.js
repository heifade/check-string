import { CheckResult } from './checkResult';
import { CheckValueBase } from './checkValueBase';
import { CheckParamsBase } from './checkParamsBase';
import { isNull } from './util';
export class CheckIntegerParams extends CheckParamsBase {
}
export class CheckValue extends CheckValueBase {
    constructor() {
        super();
    }
    isInteger(value, params) {
        let reg = /^[1-9][0-9]*$/;
        if (super.checkCommon(value, params).success) {
            return new CheckResult(true, "");
        }
        if (reg.test(value)) {
            let valueOfInt = Number(value);
            if (!isNull(params.max)) {
                if (valueOfInt > params.max) {
                    return new CheckResult(false, `最大值不能大于${params.max}`);
                }
            }
            if (!isNull(params.min)) {
                if (valueOfInt > params.min) {
                    return new CheckResult(false, `最小值不能小于${params.max}`);
                }
            }
            return new CheckResult(true, "验证通过");
        }
        else {
            return new CheckResult(false, `请输入一个整数！`);
        }
    }
}
export let checkValue = new CheckValue();
//# sourceMappingURL=checkValue.js.map