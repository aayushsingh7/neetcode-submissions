class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (let num in count) {
            freq[count[num]].push(parseInt(num));
        }

        const ans = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (let n of freq[i]) {
                ans.push(n);
                if (ans.length == k) return ans;
            }
        }
    }
}
