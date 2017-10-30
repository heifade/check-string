export class CheckParamsBase {
  //是否允许为空
  public canNull?: boolean;
  //是否允许为空字符串
  public canEmpty?: boolean;
  //是否允许为空或空字符串
  public canNullOrEmpty?: boolean;
  //当验证不成功时，提示的文字
  public failMessage?: string;
}
