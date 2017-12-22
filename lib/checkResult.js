define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 检查结果错误信息
     *
     * @export
     * @class CheckResultError
     */
    var CheckResultError = /** @class */ (function () {
        function CheckResultError() {
        }
        return CheckResultError;
    }());
    exports.CheckResultError = CheckResultError;
    /**
     * 检查结果
     *
     * @export
     * @class CheckResult
     */
    var CheckResult = /** @class */ (function () {
        /**
         * 构造函数
         * @param {boolean} success - 检查是否成功
         * @param {CheckResultError} [error] - 检查错误信息
         * @memberof CheckResult
         */
        function CheckResult(success, error) {
            this.success = success;
            this.error = error;
        }
        return CheckResult;
    }());
    exports.CheckResult = CheckResult;
});
//# sourceMappingURL=checkResult.js.map