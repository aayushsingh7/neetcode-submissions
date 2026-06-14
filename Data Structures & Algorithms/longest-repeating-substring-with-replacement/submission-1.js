class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    countFreq(char, freq) {
        let ans = 0;
        for (let [key, f] of freq) {
            if (key == char) continue;
            ans += f;
        }
        return ans;
    }
    characterReplacement(s, k) {
        let ans = 0;

        for (let i = 0; i < 26; i++) {
            let left = 0,
                cur = String.fromCharCode(i + "A".charCodeAt()),
                freq = new Map();

            for (let right = 0; right < s.length; right++) {
                freq.set(s[right], (freq.get(s[right]) || 0) + 1);
                while (this.countFreq(cur, freq) > k) {
                    let del = s[left++];
                    freq.set(del, freq.get(del) - 1);
                }
                ans = Math.max(ans, right - left + 1);
            }
        }
        return ans;
    }
}
