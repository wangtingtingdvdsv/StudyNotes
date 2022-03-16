// js树结构根据条件查找节点返回节点路径
// https://blog.csdn.net/qq_41395120/article/details/120742315

// 针对对象

// 数据示例
let catalog = {
    id: 1,
    children: [
        {
            id: 2,
            children: [
                {id: 3, children: []},
                {id: 4, children: []},
            ]
        },
        {
            id: 5,
            children: [
                {id: 6, children: []},
                {id: 7, children: []},
                {id: 8, children: []}
            ]
        },
    ]
};

// 查找函数
function getPathById(catalog, id, callback){
    //定义变量保存当前结果路径
    let temppath = [];
    try {
        function getNodePath(node) {
            temppath.push(node.id);

            //找到符合条件的节点，通过throw终止掉递归
            if (node.id === id) {
                throw ('GOT IT!');
            }
            if (node.children && node.children.length > 0) {
                for (let i = 0; i < node.children.length; i++) {
                    getNodePath(node.children[i]);
                }
                //当前节点的子节点遍历完依旧没找到，则删除路径中的该节点
                temppath.pop();
            } else {
                //找到叶子节点时，删除路径当中的该叶子节点
                temppath.pop();
            }
        }
        getNodePath(catalog);
    } catch (e) {
        let result = temppath;
        callback(result);
    }
}

// 调用
getPathById(catalog, 7, res => {
    let path = res.join(',');
    console.log(path);  // 1,5,7
});


// 针对数组


// 数据示例
let catalog = [{
    id: 1,
    children: [
        {
            id: 2,
            children: [
                {id: 3, children: []},
                {id: 4, children: []},
            ]
        },
        {
            id: 5,
            children: [
                {id: 6, children: []},
                {id: 7, children: []},
                {id: 8, children: []}
            ]
        },
    ]
}];

// 查找函数
function findPathbyId(tree, id, path) {
    if (typeof path === 'undefined') {
        path=[]
    }
    for (var i = 0; i < tree.length; i++) {
        var tempPath = [...path]
        tempPath.push(tree[i].id)
        if (tree[i].id === id) {
            return tempPath
        }
        if (tree[i].children) {
            const reuslt = findPathbyId(tree[i].children, id, tempPath)
            if (reuslt) {
                return reuslt
            }
        }
    }
}

// 调用
findPathbyId(catalog, 6)
console.log(findPathbyId(catalog, 6))  // [1, 5, 6]
