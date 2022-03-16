/**
 * 防抖
 * 定义：触发事件后在n秒内函数只能执行一次，如果在n秒内又触发了事件，则会重新计算函数执行时间。
 * 搜索框搜索输入。只需用户最后一次输入完，再发送请求
 * 手机号、邮箱验证输入检测 onchange oninput事件
 * 窗口大小Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。
 */
const debounce = (fn, wait, immediate) => {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        if (immediate && !timer) {
            fn.call(this, args);
        }
        timer = setTimeout(() => {
            fn.call(this, args);
        }, wait);
    };
};
const betterFn = debounce(() => console.log("fn 防抖执行了"), 1000, true);
document.addEventListener("scroll", betterFn);

/**
 * 节流
 * 定义：当持续触发事件时，保证隔间时间触发一次事件。
 * 1. 懒加载、滚动加载、加载更多或监听滚动条位置；
 * 2. 百度搜索框，搜索联想功能；
 * 3. 防止高频点击提交，防止表单重复提交；
 * */
function throttle(fn,wait){
    let pre = 0;
    return function(...args){
        let now = Date.now();
        if( now - pre >= wait){
            fn.apply(this,args);
            pre = now;
        }
    }
}
function handle(){
    console.log(Math.random());
}
window.addEventListener("mousemove",throttle(handle,1000));

