class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let mp1 = new Map(),
            mp2 = new Map();
        for (let char of s1) mp1.set(char, (mp1.get(char) || 0) + 1);

        let left = 0;
        for (let right = 0; right < s2.length; right++) {
            let cur = s2[right], match = 0;
            mp2.set(cur, (mp2.get(cur) || 0) + 1);

            if (right - left + 1 > s1.length) {
                let del = s2[left++];
                mp2.set(del, mp2.get(del) - 1);
                if (mp2.get(del) == 0) mp2.delete(del);
            }

            for (let [key, freq] of mp1) {
                if (mp2.has(key) && mp2.get(key) == freq) match++;
            }
            if (match == mp1.size) return true;
        }
        return false;
    }
}
