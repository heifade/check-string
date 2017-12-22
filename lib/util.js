define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 是否为null
     *
     * @export
     * @param {*} value
     * @returns {boolean}
     */
    function isNull(value) {
        return value === null || value === undefined;
    }
    exports.isNull = isNull;
    /**
     * 是否为""
     *
     * @export
     * @param {string} value
     * @returns {boolean}
     */
    function isEmpty(value) {
        return value === "";
    }
    exports.isEmpty = isEmpty;
});
// export function isNullOrEmpty(value: string): boolean {
//   return value === null || value === undefined || value === "";
// }
//# sourceMappingURL=util.js.map