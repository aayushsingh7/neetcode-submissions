class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) this.keyStore.set(key, []);
        this.keyStore.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";

        let arr = this.keyStore.get(key);
        let l = 0,
            r = arr.length;

        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (arr[m][0] > timestamp) r = m;
            else l = m + 1;
        }

        return l === 0 ? "" : arr[l - 1][1];
    }
}
