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
        /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
        /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/ // 15位
    ];
    /**
     * 身份证号码检查参数
     *
     * @export
     * @class CheckIDCardNoParams
     * @extends {CheckParamsBase}
     */
    var CheckIDCardNoParams = /** @class */ (function (_super) {
        __extends(CheckIDCardNoParams, _super);
        function CheckIDCardNoParams() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CheckIDCardNoParams;
    }(checkParamsBase_1.CheckParamsBase));
    exports.CheckIDCardNoParams = CheckIDCardNoParams;
    /**
     * 检查一个字符串是否符合身份证号码格式
     *
     * @export
     * @param {string} value - 被检查的字符串
     * @param {CheckIDCardNoParams} [params] - 参数
     * @returns {CheckResult}
     * @example
     * <br/><br/>
     * <pre>
     * import { isIDCardNo } from "check-string";
     * ...
     * let str = "330683180001017218"
     * let result = isIDCardNo(str, { canNull: true }); //str可以为null
     * if(!result.success) {
     *   console.log(result.error.code); // 输出错误编号
     *   console.log(result.error.cn); // 输出错中文错误
     *   console.log(result.error.en); // 输出错英文错误
     * }
     * </pre>
     */
    function isIDCardNo(value, params) {
        var resultCanNullOrEmpty = checkCommon_1.checkCanNullOrEmpty(value, params);
        if (resultCanNullOrEmpty) {
            return resultCanNullOrEmpty;
        }
        if (checkCommon_1.checkRegs(regList, value)) {
            return new checkResult_1.CheckResult(true);
        }
        else {
            return new checkResult_1.CheckResult(false, {
                code: "ERROR_NOT_IDCARD",
                en: "please enter a valid ID number",
                cn: "\u8BF7\u8F93\u5165\u4E00\u4E2A\u6709\u6548\u7684\u8EAB\u4EFD\u8BC1\u53F7\u7801"
            });
        }
    }
    exports.isIDCardNo = isIDCardNo;
});
//# sourceMappingURL=checkIDCardNo.js.map