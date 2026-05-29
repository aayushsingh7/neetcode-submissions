class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const n = piles.length;
        let l = 1,
            r = Math.max(...piles);

        let ans = Infinity;
        while (l <= r) {
            let m = l + Math.floor((r - l) / 2);
            let hr = 0;
            for (let i = 0; i < n; i++) {
                hr += Math.max(Math.ceil(piles[i] / m), 1);
            }

            if (hr <= h) {
                ans = Math.min(ans, m);
                r = m - 1;
            } else l = m + 1;
        }

        return ans;
    }
}
