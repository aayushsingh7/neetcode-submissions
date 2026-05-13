class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for (let char of s) {
            if (["}", "]", ")"].includes(char) && stack.length) {
                let opening = stack.pop();
                console.log({char, opening})
                if (
                    (char == "}" && opening !== "{") ||
                    (char == ")" && opening != "(") ||
                    (char == "]" && opening != "[")
                )
                    return false;
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
