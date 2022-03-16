// ps：我们约定空树不是任意一个树的子结构
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
//判断是否为子结构跟先序遍历类似
function isSubtree(root1,root2) {
    if(!root2) return true;
    if(!root1) return false;
    if(root1.val !== root2.val) return false;
    return isSubtree(root1.left,root2.left) && isSubtree(root1.right,root2.right);
}
//从根节点开始递归判断是否含有子结构
function HasSubtree(pRoot1, pRoot2)
{
    if(!pRoot1 || !pRoot2) return false;
    return (
        isSubtree(pRoot1,pRoot2)
        || HasSubtree(pRoot1.left,pRoot2)
        || HasSubtree(pRoot1.right,pRoot2)
    )
}
