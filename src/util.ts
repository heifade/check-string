/**
 * 是否为null
 *
 * @export
 * @param {*} value
 * @returns {boolean}
 */
export function isNull(value: any): boolean {
  return value === null || value === undefined;
}

/**
 * 是否为""
 *
 * @export
 * @param {string} value
 * @returns {boolean}
 */
export function isEmpty(value: string): boolean {
  return value === "";
}

// export function isNullOrEmpty(value: string): boolean {
//   return value === null || value === undefined || value === "";
// }
