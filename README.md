check-string
=======

[![NPM version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]
[![Build Status](https://travis-ci.org/heifade/check-string.svg?branch=master)](https://travis-ci.org/heifade/check-string)
[![Coverage Status](https://coveralls.io/repos/github/heifade/check-string/badge.svg?branch=master)](https://coveralls.io/github/heifade/check-string?branch=master)

[npm-image]: https://img.shields.io/npm/v/check-string.svg?style=flat-square
[npm-url]: https://npmjs.org/package/check-string
[downloads-image]: https://img.shields.io/npm/dm/check-string.svg

# 源代码及文档
[源代码](https://github.com/heifade/check-string)
[开发文档](https://heifade.github.io/check-string/)

# 安装
```bash
npm install check-string
```

# 介绍
check-string的主要功能：
* 检查字符串是否符合要求，如整型，浮点型，实数，邮件，手机号码，座机号码，身份证号码等。
* 检查字符串输入长度是否符合要求
* 检查字符串输入值是否符合最大值，最小值要求
check-string的主要特点：
* 1.整型检查：是否是整型格式，是否可以为空，是否在最大最小值范围内。
* 2.浮点型检查：是否是浮点数格式，是否可以为空，是否在最大最小值范围内，小数位数。
* 3.实数型检查：是否是实数格式，是否可以为空，是否在最大最小值范围内，小数位数。
* 4.邮件检查：是否是邮件格式
* 5.手机号码检查：是否是手机号码格式
* 6.座机号码检查：是否是座机号码格式
* 7.身份证号码检查：是否是身份证号码格式


# 方法总览
> isInteger 整型检查
> isFloat 浮点型检查
> isReal 实数型检查
> isEmail 邮件检查
> isPhoneNumber 手机号码检查
> isFixedTelephoneNumber 座机号码检查
> isIDCardNo 身份证号码检查



# 例子
例子1 整型检查
```js
import { isInteger } from "check-string";
...
let str = "123"
let result = isInteger(str, { canNull: true, min: 10, max: 10000 }); //str可以为null，最大10000，最小10
if(!result.success) {
  console.log(result.error.code); // 输出错误编号
  console.log(result.error.cn); // 输出错中文错误
  console.log(result.error.en); // 输出错英文错误
}
```

例子2 浮点型检查
```js
import { isFloat } from "check-string";
...
let str = '12.53';
let result = isFloat(str, { canNull: true, max: 500, min: 0, decimals: 2 }); //str可以为null，最大500，最小0， 小数点后最多2位小数
if (!result.success) {
  console.log(result.error.code); // 输出错误编号
  console.log(result.error.cn); // 输出错中文错误
  console.log(result.error.en); // 输出错英文错误
}
```

例子3 实数型检查
```js
import { isReal } from "check-string";
...
let str = "23.56"
let result = isReal(str, { canNull: true, max: 500, min: 0, decimals: 2 }); //str可以为null，最大500，最小0，小数点后最多2位小数
if(!result.success) {
  console.log(result.error.code); // 输出错误编号
  console.log(result.error.cn); // 输出错中文错误
  console.log(result.error.en); // 输出错英文错误
}
```

例子4 邮件检查
```js
import { isEmail } from "check-string";
...
let str = 'aa@126.com';
let result = isEmail(str, { canNull: true }); //str可以为null
if (!result.success) {
  console.log(result.error.code); // 输出错误编号
  console.log(result.error.cn); // 输出错中文错误
  console.log(result.error.en); // 输出错英文错误
}
```

例子5 手机号码检查
```js
import { isPhoneNumber } from "check-string";
...
let str = "15811111111"
let result = isPhoneNumber(str, { canNull: true }); //str可以为null
if(!result.success) {
  console.log(result.error.code); // 输出错误编号
  console.log(result.error.cn); // 输出错中文错误
  console.log(result.error.en); // 输出错英文错误
}
```

例子6 座机号码检查
```js
import { isFixedTelephoneNumber } from "check-string";
...
let str = "010-22345678"
let result = isFixedTelephoneNumber(str, { canNull: true }); //str可以为null
if(!result.success) {
  console.log(result.error.code); // 输出错误编号
  console.log(result.error.cn); // 输出错中文错误
  console.log(result.error.en); // 输出错英文错误
}
```

例子7 身份证号码检查
```js
import { isIDCardNo } from "check-string";
...
let str = "330683180001017218"
let result = isIDCardNo(str, { canNull: true }); //str可以为null
if(!result.success) {
  console.log(result.error.code); // 输出错误编号
  console.log(result.error.cn); // 输出错中文错误
  console.log(result.error.en); // 输出错英文错误
}
```
