import { CheckResult } from './checkResult';
export class CheckValueBase {
    constructor() {
    }
    checkCommon(value, params) {
        if (params) {
            if (params.canNull || params.canNull == null) {
                if (value === null || value === undefined) {
                    return new CheckResult(true, "");
                }
            }
            if (params.canEmpty || params.canEmpty == null) {
                if (value === '') {
                    return new CheckResult(true, "");
                }
            }
            if (params.canNullOrEmpty || params.canNullOrEmpty == null) {
                if (value === null || value === undefined || value === '') {
                    return new CheckResult(true, "");
                }
            }
            return new CheckResult(false, "");
        }
        return new CheckResult(false, "");
    }
}
//# sourceMappingURL=checkValueBase.js.map