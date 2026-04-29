class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for (let word of strs) {
            let count = new Array(26).fill(0);
            for (let ch of word) {
                count[ch.charCodeAt(0) - 97]++;
            }
            let key = count.join("#");
            if (!map.has(key)) map.set(key, []);
            map.get(key).push(word);
        }
        return Array.from(map.values());
    }
}
