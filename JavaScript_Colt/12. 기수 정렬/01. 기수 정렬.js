/** π Comparision Sorts - Average Time Complexity
 * - Bubble Sort - O(nΒ²)
 * - Insertion Sort - O(nΒ²)
 * - Selection Sort - O(nΒ²)
 * - Quick Sort - O(n log(n))
 * - Merge Sort - O(n log(n))
 * 
 * π Can we do better? π Radix Sort (κΈ°μμ λ ¬)
 * - Radix sort is a special sorting algorithm that works on lists of numbers
 * - It exploits the fact that information about the size of a nmber is encoded in the number of digits.
 * - λΉκ΅κ° μλ λ€λ₯Έ λ°©μμΌλ‘ μ λ ¬νκ² λλ€. 
 * - μ«μ ν¬κΈ°μ λν μ λ³΄λ₯Ό μλ¦Ώμλ‘ μΈμ½λ©νλ€λ μ¬μ€μ μ΄μ©νλ€. (4μλ¦¬μ > 2μλ¦¬μ)
 * 
 * 0. λͺ¨λ 10μ§μλΌκ³  κ°μ 
 * 1. 1μ λ¨μ μ«μ (nμΌλ‘ λλλ μ«μ) λ³λ‘ λΆλ₯νλ€ ( 0 ~ 9 μ λ²ν· )
 * 2. 10μ λ¨μ μ«μ λ³λ‘ λΆλ₯νλ€
 * 3. 100μ λ¨μ μ«μ λ³λ‘ λΆλ₯νλ€
 * ... κ°μ₯ ν° μλ¦¬ μ μ«μ λ³λ‘ λΆλ₯νλ€. μ¦ λΆλ₯μ νμλ κ°μ₯ ν° μ«μμ μλ¦Ώμμ λ¬λ Έλ€.
 * 
 * π Big - O
 * - n : λ°°μ΄μ κΈΈμ΄. μ λ ¬νλ €λ μ«μμ κΈΈμ΄.
 * - k : μλ¦Ώμ (μ¦ μλ¦Ώμκ° κΈ΄ μκ° μλ€λ©΄ λΆλ¦¬νλ€)
 * - Time Complexity : O(nk)
 * - Space Complexit : O(n + k) 
 */