define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isNull(value) {
        return value === null || value === undefined;
    }
    exports.isNull = isNull;
    function isEmpty(value) {
        return value === '';
    }
    exports.isEmpty = isEmpty;
    function isNullOrEmpty(value) {
        return value === null || value === undefined || value === '';
    }
    exports.isNullOrEmpty = isNullOrEmpty;
});
//# sourceMappingURL=util.js.map