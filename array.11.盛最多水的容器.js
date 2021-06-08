/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // 容错处理
    
    // 双指针  收敛
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    while(i < j) {
        // 计算面积
        const cmax = (j - i ) * Math.min(height[i], height[j]);
        max = Math.max(max, cmax);
        // 柱子低 的移动
        if(height[i] > height[j]){
            j--;
        }else{
            i++
        }
    }
    return max
};

console.log(maxArea([1, 1]))
// @lc code=end

