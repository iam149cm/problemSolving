/** π Binary Heap μ΄μ§ ν?
 * - Very Similar to a binary search tree, but with some different rules!
 * - In a MaxBinaryHeap, parent nodes are always lager than child nodes. 
 * - In a MinBanaryHeap, parent nodes are always smaller than child nodes.
 * 
 * - κΈ°λ³Έμ μΌλ‘ νΈλ¦¬μ ν μ’λ₯μ΄λ λΆλͺ¨μμκ°μ κ·μΉμ΄ μ‘΄μ¬νλ€. 
 * - μ΄μ§ κ²μ νΈλ¦¬μ λ€λ₯΄κ² μΌμͺ½ μ€λ₯Έμͺ½ κ·μΉμ μλ€.  
 * - νμ κ° λΈλμ λͺ¨λ  μ€ (left/right) μ΄ μ±μμ ΈμΌ νλ€.
 * 
 *      π μ΄μ§ν           |   π μ΄μ§ νμ νΈλ¦¬
 *         41              |          33
 *     39      33          |      18       [41] <--- μμμ΄ λΆλͺ¨λ³΄λ€ ν¬κΈ° λλ¬Έμ μ΄μ§νμ΄ μλλ€
 *   28  37   12           |   12   27   39
 * 
 * π Max Binary Heap 
 * - Each parent has at most two child nodes
 * - The value of each parent node is always greater than its child nodes
 * - In a max Binary Heap the parent is greater than the children, 
 * but there are no guarentees between sibling nodes
 * - A Binary heap is as compact as possible. 
 * All the children of each nodes are as full as they can be and left children are filled out first
 * 
 * π Min Binary Heap
 * - Max Binary Heap κ³Ό λ°λλ‘ λ£¨νΈκ° κ°μ₯ μμ μ«μμ΄λ€  
 * 
 * π λΆλͺ¨μμ κ΄κ³λ₯Ό μ°Ύλ κ³΅μ 
 * - For any index of an array n .. 
 * - The left child is stored at 2n + 1 / The right child is at 2n + 2
 * 
 * - For any child node at index n ..
 * - Its parent is at index (n-1) / 2  & floor (λ΄λ¦Ό)
 * 
 * π Big-O
 * - μ΄μ§ νμ μ΅λ νμ΄λ  μ΅μ νμ΄λ  μ½μ, μ­μ μ μμ΄μ μμ£Ό μ±λ₯μ΄ μ’λ€.
 * - λΈλμ μΈ΅μ΄ νλμ© μκΈΈ λ λ§λ€ μκ°μ ν λ¨μμ©λ§ λμ΄λλ€. (64κ°μ λΈλλΌλ©΄ 6λ²μ μ°μ°λ§ νλ©΄ λλ€)
 * - Insertion - O(log N)  --- λΆλͺ¨λΈλλΌλ¦¬λ§ ν λ¨κ³μ© λΉκ΅λ₯Ό νλ©΄ λ¨
 * - Removal - O(log N)
 * - Search - O(N)         --- root κ° 86 μΈ νμμ 1μ μ΄λμλκ°? ---> μ λΆ λ€ λ΄μΌ ν¨
 *
 * π RECAP
 * - μ΄μ§ νμ νμ ν μ’λ₯μ΄κ³ , νμ νΈλ¦¬μ ν μ’λ₯μ΄λ€
 * - Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues.
 * - Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children.
 * - With just a little bit of math, we can represent heaps using arrays!
 * 
 * 
 */