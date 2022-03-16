/**前序遍历*/
/*
    void PreOrderTraverse（BiTree T）
    {
        if（T==NULL）
            return;
        printf（"%c",T->data）;// 显示结点数据，可以更改为其他对结点操作
        PreOrderTraverse（T->lchild）; // 再先序遍历左子树
        PreOrderTraverse（T->rchild）; // 最后先序遍历右子树
    }
*/

/**中序遍历 */
/*
    void InOrderTraverse（BiTree T）
    {
        if（T==NULL）
            return;
        InOrderTraverse（T->lchild）; // 中序遍历左子树
        printf（"%c",T->data）; // 显示结点数据，可以更改为其他对结点操作
        InOrderTraverse（T->rchild）; // 最后中序遍历右子树
    }
*/
/**后续遍历 */
/*
    void PostOrderTraverse（BiTree T）
    {
        if（T==NULL）
            return;
        PostOrderTraverse（T->lchild); // 先后序遍历左子树
        PostOrderTraverse（T->rchild); // 再后序遍历右子树
        printf（"%c",T->data）; // 显示结点数据，可以更改为其他对结点操作
    }
* */

/**
 * 广度优先遍历(队列实现)
 * */
function wideTraversal(selectNode) {
    var nodes = [];
    if (selectNode != null) {
        var queue = [];
        queue.unshift(selectNode);
        while (queue.length != 0) {
            var item = queue.shift();
            nodes.push(item);
            var children = item.children;
            for (var i = 0; i < children.length; i++)
                queue.push(children[i]);
        }
    }
    return nodes;
}


/**
 *  深底优先遍历（栈实现）
 * */
function deepTraversal(node) {
    var nodes = [];
    if (node != null) {
        var stack = [];
        stack.push(node);
        while (stack.length != 0) {
            var item = stack.pop();
            nodes.push(item);
            var children = item.children;
            for (var i = children.length - 1; i >= 0; i--)
                stack.push(children[i]);
        }
    }
    return nodes;
}


