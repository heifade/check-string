var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../checkResult", "../checkParamsBase", "./checkCommon"], function (require, exports, checkResult_1, checkParamsBase_1, checkCommon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //正则
    var regList = [
        /^[0-9]$/,
        /^[1-9][0-9]*$/,
        /^-[1-9][0-9]*$/ //负数
    ];
    /**
     * 整数检查参数
     *
     * @export
     * @class CheckIntegerParams
     * @extends {CheckParamsBase}
     */
    var CheckIntegerParams = /** @class */ (function (_super) {
        __extends(CheckIntegerParams, _super);
        function CheckIntegerParams() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CheckIntegerParams;
    }(checkParamsBase_1.CheckParamsBase));
    exports.CheckIntegerParams = CheckIntegerParams;
    /**
     * 检查一个字符串是否符合整数格式
     *
     * @export
     * @param {string} value - 被检查的字符串
     * @param {CheckIntegerParams} [params] - 参数
     * @returns {CheckResult}
     * @example
     * <br/><br/>
     * <pre>
     * import { isInteger } from "check-string";
     * ...
     * let str = "123"
     * let result = isInteger(str, { canNull: true, min: 10, max: 10000 }); //str可以为null，最大10000，最小10
     * if(!result.success) {
     *   console.log(result.error.code); // 输出错误编号
     *   console.log(result.error.cn); // 输出错中文错误
     *   console.log(result.error.en); // 输出错英文错误
     * }
     * </pre>
     */
    function isInteger(value, params) {
        if (typeof value === "number") {
            return new checkResult_1.CheckResult(true);
        }
        var resultCanNullOrEmpty = checkCommon_1.checkCanNullOrEmpty(value, params);
        if (resultCanNullOrEmpty) {
            return resultCanNullOrEmpty;
        }
        if (checkCommon_1.checkRegs(regList, value)) {
            if (params) {
                var checkMinResult = checkCommon_1.checkMinValue(value, params.min);
                if (checkMinResult) {
                    return checkMinResult;
                }
                var checkMaxResult = checkCommon_1.checkMaxValue(value, params.max);
                if (checkMaxResult) {
                    return checkMaxResult;
                }
            }
            return new checkResult_1.CheckResult(true);
        }
        else {
            return new checkResult_1.CheckResult(false, {
                code: "ERROR_NOT_INT",
                en: "please enter an integer",
                cn: "\u8BF7\u8F93\u5165\u4E00\u4E2A\u6574\u6570"
            });
        }
    }
    exports.isInteger = isInteger;
});
//# sourceMappingURL=checkInteger.js.map