import { testCheckInteger } from "./checkInteger";
import { testCheckFloat } from "./checkFloat";
import { testCheckReal } from "./checkReal";
import { testCheckEmail } from "./checkEmail";
import { testCheckPhoneNumber } from "./checkPhoneNumber";
import { testCheckFixedTelephoneNumber } from "./checkFixedTelephoneNumber";
import { testCheckIDCardNo } from "./checkIDCardNo";


testCheckInteger();
testCheckFloat();
testCheckReal();
testCheckEmail();
testCheckPhoneNumber();
testCheckFixedTelephoneNumber();
testCheckIDCardNo();

console.log("验证完成");
