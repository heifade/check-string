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
        /^1[3|4|5|7|8][0-9]{9}$/ // 手机号码
    ];
    /**
     * 手机号码检查参数
     *
     * @export
     * @class CheckPhoneNumberParams
     * @extends {CheckParamsBase}
     */
    var CheckPhoneNumberParams = /** @class */ (function (_super) {
        __extends(CheckPhoneNumberParams, _super);
        function CheckPhoneNumberParams() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CheckPhoneNumberParams;
    }(checkParamsBase_1.CheckParamsBase));
    exports.CheckPhoneNumberParams = CheckPhoneNumberParams;
    /**
     * 检查一个字符串是否符合手机号码格式
     *
     * @export
     * @param {string} value - 被检查的字符串
     * @param {CheckPhoneNumberParams} [params] - 参数
     * @returns {CheckResult}
     * @description
     * <br/><br/>
     * <pre>
     * 移动号码段:139、138、137、136、135、134、150、151、152、157、158、159、182、183、187、188、147
     * 联通号码段:130、131、132、136、185、186、145
     * 电信号码段:133、153、180、189
     * </pre>
     * @example
     * <br/><br/>
     * <pre>
     * import { isPhoneNumber } from "check-string";
     * ...
     * let str = "15811111111"
     * let result = isPhoneNumber(str, { canNull: true }); //str可以为null
     * if(!result.success) {
     *   console.log(result.error.code); // 输出错误编号
     *   console.log(result.error.cn); // 输出错中文错误
     *   console.log(result.error.en); // 输出错英文错误
     * }
     * </pre>
     */
    function isPhoneNumber(value, params) {
        var resultCanNullOrEmpty = checkCommon_1.checkCanNullOrEmpty(value, params);
        if (resultCanNullOrEmpty) {
            return resultCanNullOrEmpty;
        }
        if (checkCommon_1.checkRegs(regList, value)) {
            return new checkResult_1.CheckResult(true);
        }
        else {
            return new checkResult_1.CheckResult(false, {
                code: "ERROR_NOT_PHONE",
                en: "please enter a valid cell phone number",
                cn: "\u8BF7\u8F93\u5165\u4E00\u4E2A\u6709\u6548\u7684\u624B\u673A\u53F7\u7801"
            });
        }
    }
    exports.isPhoneNumber = isPhoneNumber;
});
//# sourceMappingURL=checkPhoneNumber.js.map