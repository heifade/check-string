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
        /^[0-9](\.[0-9]+)?$/,
        /^[1-9][0-9]*(\.[0-9]+)?$/,
        /^-[0-9](\.[0-9]+)?$/,
        /^-[1-9][0-9]*(\.[0-9]+)?$/ // (-99*.99*, -10.00]
    ];
    /**
     * 实数检查参数
     *
     * @export
     * @class CheckRealParams
     * @extends {CheckParamsBase}
     */
    var CheckRealParams = /** @class */ (function (_super) {
        __extends(CheckRealParams, _super);
        function CheckRealParams() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CheckRealParams;
    }(checkParamsBase_1.CheckParamsBase));
    exports.CheckRealParams = CheckRealParams;
    /**
     * 检查一个字符串是否符合实数格式
     *
     * @export
     * @param {string} value - 被检查的字符串
     * @param {CheckRealParams} [params] - 参数
     * @returns {CheckResult}
     * @example
     * <pre>
     * <br/><br/>
     * import { isReal } from "check-string";
     * ...
     * let str = "23.56"
     * let result = isReal(str, { canNull: true, max: 500, min: 0 }); //str可以为null，最大500，最小0
     * if(!result.success) {
     *   console.log(result.error.code); // 输出错误编号
     *   console.log(result.error.cn); // 输出错中文错误
     *   console.log(result.error.en); // 输出错英文错误
     * }
     * </pre>
     */
    function isReal(value, params) {
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
                // 小数位数
                var pointIndex = value.indexOf(".");
                if (pointIndex > -1) {
                    if (value.substr(pointIndex + 1).length > params.decimals) {
                        return new checkResult_1.CheckResult(false, {
                            code: "ERROR_DECIMAL_DIGITS",
                            en: "at most " + params.decimals + " decimal",
                            cn: "\u6700\u591A" + params.decimals + "\u4F4D\u5C0F\u6570"
                        });
                    }
                }
            }
            // -0, -0.0, -00.00 等 不符合浮点数格式
            if (/^-0+(\.0+)?$/.test(value)) {
                return new checkResult_1.CheckResult(false, {
                    code: "ERROR_NOT_REAL",
                    en: "please enter a floating-point number",
                    cn: "\u8BF7\u8F93\u5165\u4E00\u4E2A\u6D6E\u70B9\u6570"
                });
            }
            return new checkResult_1.CheckResult(true);
        }
        else {
            return new checkResult_1.CheckResult(false, {
                code: "ERROR_NOT_REAL",
                en: "please enter a floating-point number",
                cn: "\u8BF7\u8F93\u5165\u4E00\u4E2A\u6D6E\u70B9\u6570"
            });
        }
    }
    exports.isReal = isReal;
});
//# sourceMappingURL=checkReal.js.map