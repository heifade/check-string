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
define(["require", "exports", "./checkResult", "./checkValueBase", "./checkParamsBase", "./util"], function (require, exports, checkResult_1, checkValueBase_1, checkParamsBase_1, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CheckIntegerParams = /** @class */ (function (_super) {
        __extends(CheckIntegerParams, _super);
        function CheckIntegerParams() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CheckIntegerParams;
    }(checkParamsBase_1.CheckParamsBase));
    exports.CheckIntegerParams = CheckIntegerParams;
    var CheckValue = /** @class */ (function (_super) {
        __extends(CheckValue, _super);
        function CheckValue() {
            return _super.call(this) || this;
        }
        CheckValue.prototype.isInteger = function (value, params) {
            var reg = /^[1-9][0-9]*$/;
            if (_super.prototype.checkCommon.call(this, value, params).success) {
                return new checkResult_1.CheckResult(true, "");
            }
            if (reg.test(value)) {
                var valueOfInt = Number(value);
                if (!util_1.isNull(params.max)) {
                    if (valueOfInt > params.max) {
                        return new checkResult_1.CheckResult(false, "\u6700\u5927\u503C\u4E0D\u80FD\u5927\u4E8E" + params.max);
                    }
                }
                if (!util_1.isNull(params.min)) {
                    if (valueOfInt > params.min) {
                        return new checkResult_1.CheckResult(false, "\u6700\u5C0F\u503C\u4E0D\u80FD\u5C0F\u4E8E" + params.max);
                    }
                }
                return new checkResult_1.CheckResult(true, "验证通过");
            }
            else {
                return new checkResult_1.CheckResult(false, "\u8BF7\u8F93\u5165\u4E00\u4E2A\u6574\u6570\uFF01");
            }
        };
        return CheckValue;
    }(checkValueBase_1.CheckValueBase));
    exports.CheckValue = CheckValue;
    exports.checkValue = new CheckValue();
});
//# sourceMappingURL=checkValue.js.map