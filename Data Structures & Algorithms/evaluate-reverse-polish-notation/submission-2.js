class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (let token of tokens) {
            if (["+", "*", "/", "-"].includes(token)) {
                let b = stack.pop();
                let a = stack.pop();
                let res;
                if (token == "+") res = a + b;
                else if (token == "*") res = a * b;
                else if (token == "/") res = Math.trunc(a / b);
                else res = a - b;
                stack.push(res);
            } else {
                stack.push(parseInt(token));
            }
        }

        return stack.pop();
    }
}
