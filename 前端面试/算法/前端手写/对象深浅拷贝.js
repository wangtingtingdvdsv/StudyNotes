/**
 * 浅拷贝
 * 1. Object.assign(target,source)
 * 2. es6对象扩展运算符。
* */

//深拷贝
function deepClone(obj) {
    if (!obj || typeof obj !== "object") return;
    let newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
        }
    }
    return newObj;
}
