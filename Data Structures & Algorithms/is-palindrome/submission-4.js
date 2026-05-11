class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.split(" ").join("").toLowerCase();
        const n = s.length;
        let i = 0,
            j = n - 1;
        while (i < j) {
            while (!(("a" <= s[i] && s[i] <= "z") || ("0" <= s[i] && s[i] <= "9")) && i < j) i++;
            while (!(("a" <= s[j] && s[j] <= "z") || ("0" <= s[j] && s[j] <= "9")) && j > i) j--;
            if (s[i] != s[j]) return false;
            j--;
            i++;
        }
        return true;
    }
}
