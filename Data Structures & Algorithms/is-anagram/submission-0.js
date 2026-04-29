class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        let sFreq = new Array(26).fill(0);
        let tFreq = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            const sCode = s[i].charCodeAt(0) - "a".charCodeAt(0);
            const tCode = t[i].charCodeAt(0) - "a".charCodeAt(0);
            sFreq[sCode]++;
            tFreq[tCode]++;
        }

        for (let i = 0; i < 26; i++) {
            if (sFreq[i] != tFreq[i]) return false;
        }

        return true;
    }
}
