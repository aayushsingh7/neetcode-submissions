class Solution {
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let map = new Map(),
            n = nums.length,
            res = [];
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for (let i = 0; i < n; i++) {
            map.set(nums[i], map.get(nums[i]) - 1);
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            for (let j = i + 1; j < n; j++) {
                map.set(nums[j], map.get(nums[j]) - 1);
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;

                let target = -(nums[i] + nums[j]);
                if (map.get(target) > 0) {
                    res.push([nums[i], nums[j], target]);
                }
            }
            for (let j = i + 1; j < n; j++) {
                map.set(nums[j], map.get(nums[j]) + 1);
            }
        }

        return res;
    }
}
