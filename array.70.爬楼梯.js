/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1){
        return 1
    }
    if(n === 2){
        return 2
    }
    // 线性递归 递减
    const climbStairsIter = (pre, pre2, count) => {
        if(count === 0){
            return pre
        }
        return climbStairsIter((pre + pre2), pre, count - 1) 
    }
    return climbStairsIter(2, 1, n - 2)
};
// console.log(climbStairs(5))
// @lc code=end

