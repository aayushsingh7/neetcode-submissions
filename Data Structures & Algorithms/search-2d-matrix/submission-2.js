class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const [ROWS, COLS] = [matrix.length, matrix[0].length];
        let l = 0,
            r = ROWS -1;
        while (l < r) {
            let m = l + Math.floor((r - l) / 2);
            if (matrix[m][COLS - 1] < target) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        let row = l;
        ((l = 0), (r = COLS - 1));
        while (l <= r) {
            let m = l + Math.floor((r - l) / 2);
            if (matrix[row][m] > target) {
                r = m - 1;
            } else if (matrix[row][m] < target) {
                l = m + 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
