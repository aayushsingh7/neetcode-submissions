class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0,
            n = heights.length,
            stack = [];
        const left = new Array(n).fill(-1), // -1 means no smaller index exists on left
            right = new Array(n).fill(n); // n means no smaller index exists on right

        for (let i = 0; i < n; i++) {
            while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
                stack.pop();
            }

            if (stack.length) {
                left[i] = stack[stack.length - 1];
            }

            stack.push(i);
        }

        stack = [];
        for (let i = n - 1; i >= 0; i--) {
            while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
                stack.pop();
            }

            if (stack.length) {
                right[i] = stack[stack.length - 1];
            }

            stack.push(i);
        }

        for (let i = 0; i < n; i++) {
            // width is between right[i] and left[i] so we need to exclude both thats why (-1);
            const width = right[i] - left[i] - 1;
            max = Math.max(max, heights[i] * width);
        }

        return max;
    }
}
