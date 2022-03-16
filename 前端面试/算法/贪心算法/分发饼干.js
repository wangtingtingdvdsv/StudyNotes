/**
 * 题目: https://leetcode-cn.com/problems/assign-cookies/
 * 难度：简单
 * */
var findContentChildren = function(g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let succ = [];
    for(let i = 0; i < s.length; i++) {
        if(!g[0]) break;
        if(s[i] >= g[0]) {
            succ.push(g.shift());
        } else {
            continue;
        }
    }
    return succ.length;
};
