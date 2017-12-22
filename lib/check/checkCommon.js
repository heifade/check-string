define(["require", "exports", "../checkResult", "../util"], function (require, exports, checkResult_1, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * <pre>
     * 内部方法。
     * 检查是否允许为空
     * </pre>
     *
     * @export
     * @param {string} value
     * @param {CheckParamsBase} [params]
     * @returns {CheckResult}
     */
    function checkCanNullOrEmpty(value, params) {
        if (params) {
            if (util_1.isNull(value)) {
                // 值为空时
                if (params.canNull || params.canNullOrEmpty) {
                    // 验证要求可以为空
                    return new checkResult_1.CheckResult(true);
                }
                else {
                    //验证要求不可以为空
                    return new checkResult_1.CheckResult(false, {
                        code: "ERROR_CANNOT_NULL",
                        en: "can not be empty",
                        cn: "\u4E0D\u80FD\u4E3A\u7A7A"
                    });
                }
            }
            else if (util_1.isEmpty(value)) {
                // 值为空字符串时
                if (params.canEmpty || params.canNullOrEmpty) {
                    return new checkResult_1.CheckResult(true);
                }
                else {
                    return new checkResult_1.CheckResult(false, {
                        code: "ERROR_CANNOT_EMPTY",
                        en: "can not be empty",
                        cn: "\u4E0D\u80FD\u4E3A\u7A7A"
                    });
                }
            }
        }
        return null;
    }
    exports.checkCanNullOrEmpty = checkCanNullOrEmpty;
    /**
     * <pre>
     * 内部访法
     * 校验正则表达式数组，所有正则都通过返回true
     * </pre>
     *
     * @export
     * @param {Array<any>} regList
     * @param {string} value
     * @returns
     */
    function checkRegs(regList, value) {
        for (var _i = 0, regList_1 = regList; _i < regList_1.length; _i++) {
            var reg = regList_1[_i];
            if (reg.test(value)) {
                return true;
            }
        }
        return false;
    }
    exports.checkRegs = checkRegs;
    /**
     * 检查最大值是否满足要求
     *
     * @export
     * @param {string} value
     * @param {number} max
     * @returns
     */
    function checkMaxValue(value, max) {
        var valueOfInt = Number(value);
        if (!util_1.isNull(max)) {
            if (valueOfInt > max) {
                return new checkResult_1.CheckResult(false, {
                    code: "ERROR_MAX",
                    en: "can not be more than " + max,
                    cn: "\u4E0D\u80FD\u5927\u4E8E" + max
                });
            }
        }
        return null;
    }
    exports.checkMaxValue = checkMaxValue;
    /**
     * 检查最小值是否满足要求
     *
     * @export
     * @param {string} value
     * @param {number} min
     * @returns
     */
    function checkMinValue(value, min) {
        var valueOfInt = Number(value);
        if (!util_1.isNull(min)) {
            if (valueOfInt < min) {
                return new checkResult_1.CheckResult(false, {
                    code: "ERROR_MIN",
                    en: "can not be less than " + min,
                    cn: "\u4E0D\u80FD\u5C0F\u4E8E" + min
                });
            }
        }
        return null;
    }
    exports.checkMinValue = checkMinValue;
});
//# sourceMappingURL=checkCommon.js.map