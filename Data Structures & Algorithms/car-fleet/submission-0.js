class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet = function (target, position, speed) {
        const arr = position.map((p, i) => [p, speed[i]]).sort((a, b) => b[0] - a[0]);

        let stack = [];

        for (let i = 0; i < arr.length; i++) {
            const [pos, sp] = arr[i];
            const time = (target - pos) / sp;
            stack.push(time);
            if (stack.length >= 2 && time <= stack[stack.length - 2]) {
                stack.pop();
            }
        }

        return stack.length;
    };
}
