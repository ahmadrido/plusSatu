/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    // kalau array kosong, tidak ada data yang bisa diproses
    if (nums.length === 0) return 0;

    // i dipakai untuk menandai posisi angka unik terakhir
    let i = 0; 

    // j berjalan untuk mengecek setiap angka setelah angka pertama
    for (let j = 1; j < nums.length; j++) {
        // kalau angka sekarang berbeda dengan angka unik terakhir,
        // berarti ini angka baru dan harus disimpan ke depan
        if (nums[j] !== nums[i]) {
            i++;               
            nums[i] = nums[j]; 
        }
    }

    // jumlah angka unik = posisi terakhir angka unik + 1
    return i + 1; 
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));