/**
 * 检查结果错误信息
 *
 * @export
 * @class CheckResultError
 */
export class CheckResultError {
  /**
   * 英文错误信息
   *
   * @type {string}
   * @memberof CheckResultError
   */
  public en: string;
  /**
   * 中文错误信息
   *
   * @type {string}
   * @memberof CheckResultError
   */
  public cn: string;
  /**
   * 错误编码
   *
   * @type {string}
   * @memberof CheckResultError
   */
  public code: string;
}

/**
 * 检查结果
 *
 * @export
 * @class CheckResult
 */
export class CheckResult {
  /**
   * 检查是否成功
   *
   * @type {boolean}
   * @memberof CheckResult
   */
  public success: boolean;
  /**
   * 检查出错时的错误信息
   *
   * @type {CheckResultError}
   * @memberof CheckResult
   */
  public error: CheckResultError;

  /**
   * 构造函数
   * @param {boolean} success - 检查是否成功
   * @param {CheckResultError} [error] - 检查错误信息
   * @memberof CheckResult
   */
  public constructor(success: boolean, error?: CheckResultError) {
    this.success = success;
    this.error = error;
  }
}
