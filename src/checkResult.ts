export class CheckResultError {
  public en: string;
  public cn: string;
  public code: string;
}

export class CheckResult {
  public success: boolean;
  public error: CheckResultError;

  public constructor(success: boolean, error?: CheckResultError) {
    this.success = success;
    this.error = error;
  }
}
