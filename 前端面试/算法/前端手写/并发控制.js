/**
 题目：编写asyncQueue函数， 实现同一时刻最多发出limit个请求
 参考文章：https://juejin.cn/post/7041515221625602055
 思路：思路如下：初始化一个 pool数组 作为并发池，然后先循环把并发池塞满，不断地调
      用 addTask 然后通过自己自定义的请求函数requst(请求函数可以是网络请求封装的 promise 对象，或者是其他的)，
      每个任务task是一个Promise对象包装的，执行完就 pop 出连接池， 然后将新任务push 添加进并发池 pool 中。
 * */
const getData = id => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`任务${id}完成`)
        }, 3000)
    }).then(res => {
        console.log('外部逻辑', res);
    })
}

function asyncQueue(fnReturnPromise, limit) {
    // Todo 这个函数就是需要实现的地方
    let pool = []//并发池
    return async (i) => {
        let task = fnReturnPromise(i);
        task.then(()=>{
            //每当并发池跑完一个任务,从并发池删除个任务
            pool.splice(pool.indexOf(task), 1)
        })

        pool.push(task);
        if(pool.length === limit){
            //利用Promise.race方法来获得并发池中某任务完成的信号
            //跟await结合当有任务完成才让程序继续执行,让循环把并发池塞满
            await Promise.race(pool)
        }
    }
}

const getDataWithLimit = asyncQueue(getData, 2);

for (let i = 0; i < 10; i++) {
    await getDataWithLimit(i);
}
