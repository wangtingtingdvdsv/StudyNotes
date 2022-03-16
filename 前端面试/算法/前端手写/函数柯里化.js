// https://www.jianshu.com/p/2975c25e4d71
// 支持多参数传递
/*
* 好处
* 1. 参数复用
* 2. 提前确认
* 3. 延迟运行
* */
/*
* 性能
* 1. 存取arguments对象通常要比存取命名参数要慢一点
* 2. 一些老版本的浏览器在arguments.length的实现上是相当慢的
* 3. 使用fn.apply( … ) 和 fn.call( … )通常比直接调用fn( … ) 稍微慢点
* 4. 创建大量嵌套作用域和闭包函数会带来花销，无论是在内存还是速度上
* */
function progressCurrying(fn, args) {

    var _this = this
    var len = fn.length;
    var args = args || [];

    return function() {
        var _args = Array.prototype.slice.call(arguments);
        Array.prototype.push.apply(args, _args);

        // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
        if (_args.length < len) {
            return progressCurrying.call(_this, fn, _args);
        }

        // 参数收集完毕，则执行fn
        return fn.apply(this, _args);
    }
}

// 扩展一道经典面试题
// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}

// 或

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = [].slice.call(arguments);
    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值,执行时已经收集所有参数为数组
    var adder = function () {
        var _adder = function () {
            // 执行收集动作，每次传入的参数都累加到原参数
            [].push.apply(_args, [].slice.call(arguments));
            return _adder;
        };
        // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }
        return _adder;
    }
    return adder(_args);
}



add(1)(2)(3)                // 6
add(1, 2, 3)(4)             // 10
add(1)(2)(3)(4)(5)          // 15
add(2, 6)(1)                // 9
