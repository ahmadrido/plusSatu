/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
    // kalau linked list kosong, langsung kembalikan saja
    if (!head) return head;
    
    // current dipakai untuk berjalan dari node pertama sampai akhir
    let current = head;
    
    // selama masih ada node sekarang dan node setelahnya
    while (current !== null && current.next !== null) {
        
        // kalau nilai sekarang sama dengan nilai node berikutnya,
        // berarti node berikutnya adalah duplikat
        if (current.val === current.next.val) {
            // lewati node duplikat dengan menghubungkan langsung ke node selanjutnya
            current.next = current.next.next;
        } else {
            // kalau berbeda, maju ke node berikutnya
            current = current.next;
        }
    }
    
    // kembalikan head karena hasil perubahan ada di list yang sama
    return head;
};
