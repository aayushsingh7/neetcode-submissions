class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode = "";
        for (let str of strs) {
            encode += str.length + "#" + str;
        }
        return encode;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decode = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] != "#") {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            let decodeStr = str.substring(i, j);
            decode.push(decodeStr);
            i = j;
        }
        return decode;
    }
}
