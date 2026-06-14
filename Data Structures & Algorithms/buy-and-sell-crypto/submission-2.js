class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(p) {
        let left = 0, ans = 0;
        for(let right = 1; right < p.length; right++) {
            if(p[left] > p[right]) {
                left = right;
                continue;
            }
            ans = Math.max(ans, p[right] - p[left]);
        }
        return ans;
    }
}
