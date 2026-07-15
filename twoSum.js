/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2,7,11,15]
const target = 9

var twoSum = function(nums, target) {
    // ibaratnya ini tampungan untuk menyimpan angka yang sudah dilewati
    const seen = new Map(); 

    for(let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];
        let neededNumber = target - currentNumber; // selisih angka yang dibutuhkan

        // misalnya angka yang dibutuhkan adalah 7
        // maka angka yang dibutuhkan adalah 9 - 7 = 2
        
        // cek apakah angka yang dibutuhkan sudah pernah dilewati
        if(seen.has(neededNumber)) {
            // kembalikan index angka yang dibutuhkan dan index saat ini
            return [seen.get(neededNumber), i]; 
        }

        // tambahkan angka saat ini + indexnya ke tampungan
        seen.set(currentNumber, i);
    }
};

console.log(twoSum(nums, target))