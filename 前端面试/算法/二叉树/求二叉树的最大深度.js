/*
* 如果二叉树为空，二叉树的深度为0
* 如果二叉树不为空，二叉树的深度 = max(左子树深度， 右子树深度) + 1
* */
function TreeDepth(pRoot)
{
    if(pRoot === null) return 0;
    let left = TreeDepth(pRoot.left);
    let right = TreeDepth(pRoot.right);
    return Math.max(left,right) + 1;
}
