/**
 * 题目: https://leetcode-cn.com/problems/house-robber/
 * 难度：中等
 * */
var rob = function(nums) {
    let money = [];
    if(nums.length <= 0) return 0;
    if(nums.length  == 1) return nums[0];
    money[0] = nums[0];
    money[1] = Math.max(nums[1], nums[0]);
    for(let i = 2; i < nums.length; i++) {
        money[i] = Math.max(nums[i] + money[i - 2], money[i - 1]);
    }
    return money[nums.length - 1]
};
