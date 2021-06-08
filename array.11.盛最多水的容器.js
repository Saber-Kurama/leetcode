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
    let left = 0
    let right = height.length - 1
    let res = 0
    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left)
        if (area > res) res = area
        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }
    return res
};

console.log(maxArea([1, 1]))
// @lc code=end

