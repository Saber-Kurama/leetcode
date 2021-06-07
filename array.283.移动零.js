/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    // 移动赋值？ 
    let j=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            nums[j]=nums[i]
            j++
        }
    }
    for(i=j;i<nums.length;i++){
        nums[i]=0
    }
    return nums
};
// var moveZeroes = function(nums) {
//     // 一些容错处理
//     if(nums.length <= 0 ){
//         return nums;
//     }
//     // 双指针的方案
//     
//     let j = 0;
//     for(let i = 0; i < nums.length; i++  ){
//         if(nums[i] !== 0){
//             // nums[j] = nums[i]
//             if(i != j){
//                // 问题是后面 可能还是会操作这个 nums[i] 在赋值一次
//                 // nums[i] =  0;
//                [nums[i],nums[j]]=[nums[j],nums[i]]
//             }
//             j++
//         }
//     }
//     return nums;
// };
// console.log(moveZeroes([0,1,0,3,12]))
// console.log(moveZeroes([0,0,0]))
// console.log(moveZeroes([0,0,0,1,4]))
// @lc code=end

