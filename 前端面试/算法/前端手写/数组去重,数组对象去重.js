//数组
const arr = [2,7,5,7,2,8,9];
console.log([...new Set(arr)]); // [2,7,5,8,9];
//对象
const list = [{age:18,name:'张三'},{age:18,name:'李四'},{age:18,name:'王五'}]
let hash = {};
const newArr = arr.reduce((item, next) => {
    hash[next.age] ? '' : hash[next.age] = true && item.push(next);
    return item;
}, []);
console.log(list);
