class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        this.minStack.push(
            Math.min(
                val,
                this.minStack.length === 0 ? Infinity : this.minStack[this.minStack.length - 1],
            ),
        );
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop();
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
