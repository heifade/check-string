define(["require", "exports", "./checkResult"], function (require, exports, checkResult_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CheckValueBase = /** @class */ (function () {
        function CheckValueBase() {
        }
        CheckValueBase.prototype.checkCommon = function (value, params) {
            if (params) {
                if (params.canNull || params.canNull == null) {
                    if (value === null || value === undefined) {
                        return new checkResult_1.CheckResult(true, "");
                    }
                }
                if (params.canEmpty || params.canEmpty == null) {
                    if (value === '') {
                        return new checkResult_1.CheckResult(true, "");
                    }
                }
                if (params.canNullOrEmpty || params.canNullOrEmpty == null) {
                    if (value === null || value === undefined || value === '') {
                        return new checkResult_1.CheckResult(true, "");
                    }
                }
                return new checkResult_1.CheckResult(false, "");
            }
            return new checkResult_1.CheckResult(false, "");
        };
        return CheckValueBase;
    }());
    exports.CheckValueBase = CheckValueBase;
});
//# sourceMappingURL=checkValueBase.js.map