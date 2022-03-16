// 是否存在3个递增的子序列
var increasingTriplet = function(nums) {
    const n = nums.length;
    if (n < 3) {
        return false;
    }
    let first = nums[0], second = Number.MAX_VALUE;
    for (let i = 1; i < n; i++) {
        const num = nums[i];
        if (num > second) {
            return true;
        } else if (num > first) {
            second = num;
        } else {
            first = num;
        }
    }
    return false;
};

console.log(increasingTriplet([1,2,3,4,5]))
console.log(increasingTriplet([5,4,3,2,1]))
console.log(increasingTriplet([2,1,5,0,4,6]))
