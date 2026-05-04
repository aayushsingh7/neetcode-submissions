class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const [ROWS, COLS] = [9, 9];
        const rowFreq = Array.from({ length: 9 }, () => new Array(10).fill(false));
        const colFreq = Array.from({ length: 9 }, () => new Array(10).fill(false));

        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLS; col++) {
                const val = board[row][col];
                if (val != ".") {
                    if (rowFreq[row][val] || colFreq[col][val]) return false;
                    rowFreq[row][val] = colFreq[col][val] = true;
                }
            }
        }

        for (let row = 0; row < ROWS; row += 3) {
            for (let col = 0; col < COLS; col += 3) {
                let set = new Set();
                for (let i = row; i < row + 3; i++) {
                    for (let j = col; j < col + 3; j++) {
                        if (board[i][j] == ".") continue;
                        if (set.has(board[i][j])) return false;
                        set.add(board[i][j]);
                    }
                }
            }
        }

        return true;
    }
}

// board=[
// [".",".","4",".",".",".","6","3","."],
// [".",".",".",".",".",".",".",".","."],
// ["5",".",".",".",".",".",".","9","."],
// [".",".",".","5","6",".",".",".","."],
// ["4",".","3",".",".",".",".",".","1"],
// [".",".",".","7",".",".",".",".","."],
// [".",".",".","5",".",".",".",".","."],
// [".",".",".",".",".",".",".",".","."],
// [".",".",".",".",".",".",".",".","."]]
