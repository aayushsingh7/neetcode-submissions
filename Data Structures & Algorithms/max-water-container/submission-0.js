class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0,
            right = heights.length - 1,
            ans = 0;
        while (left < right) {
            let area = Math.min(heights[left], heights[right]) * (right - left);
            ans = Math.max(ans, area);
            if (heights[left] < heights[right]) left++;
            else if (heights[left] > heights[right]) right--;
            else {
                left++;
                right--;
            }
        }
        return ans;
    }
}
