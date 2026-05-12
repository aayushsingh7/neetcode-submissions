class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let ans = 0,
            n = height.length;
        let left = 0, right = n-1;
        let leftMax = height[left], rightMax = height[right]; 
        while(left < right) {
            if(leftMax < rightMax) {
                left++;
                leftMax = Math.max(leftMax, height[left]);
                ans += (leftMax - height[left]);
            }else {
                right--;
                rightMax = Math.max(rightMax, height[right]);
                ans += (rightMax - height[right]);
            }
        }
        return ans;
    }
}
