class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const prefix = new Array(n + 1).fill(1);
        const suffix = new Array(n + 1).fill(1);
        for (let i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }
        for (let i = n - 1; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i];
        }
        let ans = [];
        for (let i = 0; i < n; i++) {
            ans.push(prefix[i] * suffix[i + 1]);
        }

        return ans;
    }
}
