// https://leetcode-cn.com/problems/coin-change/solution/322-ling-qian-dui-huan-by-leetcode-solution/
/**
 * public class Solution {
    public int coinChange(int[] coins, int amount) {
        int max = amount + 1;
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, max);
        dp[0] = 0;
        for (int i = 1; i <= amount; i++) {
            for (int j = 0; j < coins.length; j++) {
                if (coins[j] <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
}
 * */

var coinChange = function(coins, amount) {
    coins.sort((coin1, coin2) => {
        return coin2 - coin1;
    })
    let coinNum = 0;
    if(amount == 0) return 0;
    for(let i = 0; i < coins.length; i++) {
        let num = Math.floor(amount / coins[i]);
        let result = amount % coins[i];
        amount = result;
        console.log('num:', num);
        console.log('amount:', amount);
        if(num > 0) coinNum = coinNum + num;
        if(num == 0) continue
        if(result == 0) return coinNum;
    }
    return -1;
};

console.log(coinChange([1, 2, 5], 11))
