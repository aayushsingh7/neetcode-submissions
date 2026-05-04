class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map = new Map(),
            ans = 0;
        for (let num of nums) map.set(num, (map.get(num) || 0) + 1);
        for (let num of nums) {
            let temp = num,
                len = 0;
            if (!map.has(temp - 1)) {
                while (map.has(temp)) {
                    len++;
                    temp++;
                    ans = Math.max(ans, len);
                }
                len = 0;
            }
        }
        return ans;
    }
}
