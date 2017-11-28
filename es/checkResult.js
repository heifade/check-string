/**
 * 检查结果错误信息
 *
 * @export
 * @class CheckResultError
 */
export class CheckResultError {
}
/**
 * 检查结果
 *
 * @export
 * @class CheckResult
 */
export class CheckResult {
    /**
     * 构造函数
     * @param {boolean} success - 检查是否成功
     * @param {CheckResultError} [error] - 检查错误信息
     * @memberof CheckResult
     */
    constructor(success, error) {
        this.success = success;
        this.error = error;
    }
}
//# sourceMappingURL=checkResult.js.map