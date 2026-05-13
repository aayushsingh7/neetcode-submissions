class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        let stack = [],
            ans = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            const temp = temperatures[i];
            while (stack.length && temperatures[stack[stack.length - 1]] < temp) {
                let idx = stack.pop();
                ans[idx] = i - idx;
            }

            stack.push(i);
        }
        return ans;
    }
}
