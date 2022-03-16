var climbStairs = function(n) {
    let dp = [0, 1, 2];
    if(n == 0) return dp[0];
    if(n == 1) return dp[1];
    if(n == 2) return dp[2];
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
