import Decimal from "decimal.js";

/**
 * @description 加法
 * @param {*} x1
 * @param {*} x2
 * @returns
 */
export function nPlus (x1 = "", x2 = "") {
  if (!x1 || !x2) return;
  if (typeof +x1 !== "number" || typeof +x2 !== "number") {
    new Error("arguments is not number");
    return;
  }
  try {
    let temp1 = new Decimal(+x1);
    let temp2 = new Decimal(+x2);
    return temp1.plus(temp2).toNumber();
  } catch (error) { }
}

/**
 * @description 减法
 * @param {} x1
 * @param {*} x2
 * @returns
 */

export function nMinus (x1 = "", x2 = "") {
  if (!x1 || !x2) return;
  if (typeof +x1 !== "number" || typeof +x2 !== "number") {
    new Error("arguments is not number");
    return;
  }
  try {
    let temp1 = new Decimal(+x1);
    let temp2 = new Decimal(+x2);
    return temp1.minus(temp2).toNumber();
  } catch (error) { }
}

/**
 * @description 乘法
 * @param {*} x1
 * @param {*} x2
 * @returns
 */
export function nTimes (x1 = "", x2 = "") {
  if (!x1 || !x2) return;
  if (typeof +x1 !== "number" || typeof +x2 !== "number") {
    new Error("arguments is not number");
    return;
  }
  try {
    let temp1 = new Decimal(+x1);
    let temp2 = new Decimal(+x2);
    return temp1.times(temp2).toNumber();
  } catch (error) { }
}

/**
 * @description 除法
 * @param {*} x1
 * @param {*} x2
 * @returns
 */

export function nDiv (x1 = "", x2 = "") {
  if (!x1 || !x2) return;
  if (typeof +x1 !== "number" || typeof +x2 !== "number") {
    new Error("arguments is not number");
    return;
  }
  try {
    let temp1 = new Decimal(+x1);
    let temp2 = new Decimal(+x2);
    return temp1.div(temp2).toNumber();
  } catch (error) { }
}


