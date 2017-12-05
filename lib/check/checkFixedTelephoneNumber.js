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
        // /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ // 固定电话号码
        /^(0[0-9]{2,3}\-{0,1})?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/ // 固定电话号码
    ];
    /**
     * 固定电话检查参数
     *
     * @export
     * @class CheckFixedTelephoneNumberParams
     * @extends {CheckParamsBase}
     */
    var CheckFixedTelephoneNumberParams = /** @class */ (function (_super) {
        __extends(CheckFixedTelephoneNumberParams, _super);
        function CheckFixedTelephoneNumberParams() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CheckFixedTelephoneNumberParams;
    }(checkParamsBase_1.CheckParamsBase));
    exports.CheckFixedTelephoneNumberParams = CheckFixedTelephoneNumberParams;
    /**
     * 检查一个字符串是否符合固定电话格式
     *
     * @export
     * @param {string} value - 被检查的字符串
     * @param {CheckFixedTelephoneNumberParams} [params] - 参数
     * @returns {CheckResult}
     * @example
     * <br/><br/>
     * <pre>
     * import { isFixedTelephoneNumber } from "check-string";
     * ...
     * let str = "010-22345678"
     * let result = isFixedTelephoneNumber(str, { canNull: true }); //str可以为null
     * if(!result.success) {
     *   console.log(result.error.code); // 输出错误编号
     *   console.log(result.error.cn); // 输出错中文错误
     *   console.log(result.error.en); // 输出错英文错误
     * }
     * </pre>
     */
    function isFixedTelephoneNumber(value, params) {
        var resultCanNullOrEmpty = checkCommon_1.checkCanNullOrEmpty(value, params);
        if (resultCanNullOrEmpty) {
            return resultCanNullOrEmpty;
        }
        if (checkCommon_1.checkRegs(regList, value)) {
            return new checkResult_1.CheckResult(true);
        }
        else {
            return new checkResult_1.CheckResult(false, {
                code: "ERROR_NOT_TEL",
                en: "please enter a valid fixed phone number",
                cn: "\u8BF7\u8F93\u5165\u4E00\u4E2A\u6709\u6548\u7684\u56FA\u5B9A\u7535\u8BDD\u53F7\u7801"
            });
        }
    }
    exports.isFixedTelephoneNumber = isFixedTelephoneNumber;
});
//# sourceMappingURL=checkFixedTelephoneNumber.js.map