class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0, n = heights.length;
        for(let i = 0; i < n; i++) {
            let l = i, r = i;
            while(l>0) {
                if(heights[l-1] < heights[i]) break;
                l--;
            }

            while(r < n - 1) {
                if(heights[r+1] < heights[i]) break;
                r++
            }
            max = Math.max(max, ((r - l) + 1) * heights[i])
        }
        return max;
    }
}
