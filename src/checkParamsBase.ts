/**
 * 检查参数
 *
 * @export
 * @class CheckParamsBase
 */
export class CheckParamsBase {
  /**
   * <pre>
   * 被检查的字符串是否允许为空(null, undefined)。 默认值为false
   * 如果此参数为tre，当被检查的字符串为null 或 undefined 时，直接返回成功，不再进行下一步检查。
   * </pre>
   * @type {boolean}
   * @memberof CheckParamsBase
   */
  public canNull?: boolean;
  /**
   * <pre>
   * 被检查的字符串是否允许为空字符串("")。默认值为false
   * 如果此参数为tre，当被检查的字符串为null 或 undefined 时，直接返回成功，不再进行下一步检查。
   * </pre>
   *
   * @type {boolean}
   * @memberof CheckParamsBase
   */
  public canEmpty?: boolean;
  /**
   * <pre>
   * 被检查的字符串是否允许为空或空字符串(null, undefined, "")。默认值为false
   * 如果此参数为tre，当被检查的字符串为null 或 undefined 时，直接返回成功，不再进行下一步检查。
   * </pre>
   *
   * @type {boolean}
   * @memberof CheckParamsBase
   */
  public canNullOrEmpty?: boolean;
}
