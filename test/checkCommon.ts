
export function doCheck(checkFunction: Function, value: string, expect?: boolean, params?: {}) {
  let result = checkFunction(value, params);
  expect = expect === undefined ? true : expect;
  console.assert(result.success == expect, result.message + ':' + value);
}

export function testCommon(checkFunction) {

  doCheck(checkFunction, null, true, {canNull: true});
  doCheck(checkFunction, null, false, {canNull: false});

  doCheck(checkFunction, "", true, {canEmpty: true});
  doCheck(checkFunction, "", false, {canEmpty: false});

  doCheck(checkFunction, null, true, {canNullOrEmpty: true});
  doCheck(checkFunction, null, false, {canNullOrEmpty: false});

  doCheck(checkFunction, "", true, {canNullOrEmpty: true});
  doCheck(checkFunction, "", false, {canNullOrEmpty: false});
}
