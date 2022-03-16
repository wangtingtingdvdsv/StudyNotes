/**
 * 题目: https://leetcode-cn.com/problems/reverse-linked-list/solution/
 * 难度：简单
 * */

/** 方法一：迭代*/
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

/** 方法二：递归 */
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

