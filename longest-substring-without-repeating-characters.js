/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    // menyimpan panjang substring terpanjang yang ditemukan
    let maxLength = 0;
    // batas kiri dari window yang sedang aktif
    let left = 0;         
    // menyimpan posisi terakhir setiap karakter yang sudah pernah dilihat
    let seen = new Map(); 

    // right bergerak maju untuk membaca karakter satu per satu
    for (let right = 0; right < s.length; right++) {
        let currentChar = s[right];

        // kalau karakter ini sudah pernah muncul di dalam window aktif,
        // geser left ke posisi setelah kemunculan terakhirnya
        if (seen.has(currentChar) && seen.get(currentChar) >= left) {
            left = seen.get(currentChar) + 1;
        }

        // simpan posisi terbaru karakter saat ini
        seen.set(currentChar, right);

        // hitung panjang window sekarang dan bandingkan dengan hasil terbaik
        maxLength = Math.max(maxLength, right - left + 1);
    }

    // kembalikan panjang substring tanpa karakter yang berulang
    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); 
console.log(lengthOfLongestSubstring("pwwkew"));   