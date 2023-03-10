/** π Trees  : A data structure that consists of nodes in a parent / child relationship.
 * - νλμ μμ λΈλλ 0 κ° ~ μ¬λ¬κ°μ νμ λΈλλ₯Ό κ°λ¦¬ν¬ μ μλ€.
 * - λΈλλ λΆλͺ¨-μμ κ΄κ³μ μν΄ λΆλͺ¨ --> μμλ§ κ°λ₯. μμμ΄ λΆλͺ¨λ₯Ό κ°λ¦¬ν€λ©΄ μλλ€.
 * - μ¦, λΆλͺ¨->λΆλͺ¨ or μμ->λΆλͺ¨ λ λΆκ°λ₯νλ€. νμ λ₯Ό κ°λ¦¬ν€λ κ²λ λΆκ°λ₯νλ€.
 * - λ£¨νΈλ νλμ¬μΌ νλ€.
 * 
 * π Tree terminology
 * - Root - The top node node in a tree
 * - Child - A node directly connected to another node when moving away from the Root
 * - Parent - The converse notion of a child.
 * - Siblings - A group of nodes with the same parent.
 * - Leaf - a node with no children.
 * - Edge - The connection between one node and another.  (νμ΄ν)
 * 
 * - Lists : linear (ν κ°λμ κΈΈ λ°μ μλ€)
 * - Trees - nonlinear (μ¬λ¬ κ°λμ κ²½λ‘κ° μ‘΄μ¬νλ€)
 * 
 * π Real world use cases of the tree 
 * - HTML DOM
 * - JSON
 * - Network Routing
 * - Abstract syntax tree
 * - Artifical Intelligence (ex. ν±νν  κ²μνλ κ²½μ° μλλ°©μ μμ λ°λ₯Έ λ€μ μ .. )
 * - Folders in Operating Systems (λλ ν λ¦¬ μμ€ν)
 * 
 * 
 * π Binary trees
 * - κ° λΈλκ° μ΅λ λ κ°μ μμμ κ°μ ΈμΌ νλ€λ νΉλ³ν μ‘°κ±΄μ΄ μλ€. ( μμ κ°―μ : 0 ~ 2κ° )
 * - μνκ° μ½λ€λ μ₯μ μ΄ μλ€.
 * 
 * π Binary Search trees (BST)
 * - λ°μ΄ν°κ° μμμ λ°λΌ μ λ ¬λμ΄ μκ³ , μμλ₯Ό λ§€κΈ°λ λ°©λ² (κ·μΉ) μ΄ μμ΄μΌ νλ€.
 * - μ μ¬μ©νλκ°? - κ²μμ λΉ λ₯΄κ³  μ½κ² λ§λ€μ΄μ€λ€. μΆκ°νλ κ²κ° λΈλμ μλ¦¬λ₯Ό μ°Ύλ κ²λ μ½κ² ν΄ μ€λ€.
 * - μ λ ¬λμ§ μμ νΈλ¦¬μ λΉν΄ νΉμ  κ°μ μ°Ύλ κ²μ΄ κ΅μ₯ν λΉ λ₯΄λ€. (μ°Ύλ κ°μ΄ νμ¬ λΈλλ³΄λ€ μλ/ν¬λ ? μμΌλ©΄-μΌμͺ½, ν¬λ©΄-μ€λ₯Έμͺ½)
 * 
 * - Every parent node has at most two children
 * - Every node to the left of a parent node is always less tan the parent
 * - Every node to right of a parent node is always greater than the parent
 * 
 * π Big O of BST  (not guaranteed π’)
 * - Insertion : O(log n) ... μ±λ₯μ΄ κ΄μ°¬μ νΈμ΄λ€. O(1) κ³Ό κ±°μ λ€λ₯Ό λ° μμ
 * - Searching - O(log n)
 * 
 * - O(log n) μ νκ· μ μΈ κ²½μ°μ μ΅κ³ μ κ²½μ°μ νΈλ¦¬κ° κ°μ§λ μκ°λ³΅μ‘λ. μ΄κ²λ³΄λ€ λ λΉ λ₯Ό μλ μλ€.
 * - κ·Έλ¬λ μ΅μμ κ²½μ° μ΄λ€ κ²½μ°λ μμ£Ό λλ¦΄ μ μλ€. 
 * - (μ°κ²° λ¦¬μ€νΈλ λ€λ₯Όλ° μλ ννμ -νμͺ½μΌλ‘ μΉμ°μΉ- μ΄μ§νΈλ¦¬μ κ²½μ° ... O(N) μ΄ λ κ²μ΄λ€)
 * - λΈλκ° ν λ¨κ³ μμΉνλ€λ©΄ κ²μν΄μΌ νλ κ°μ΄ 2λ°°λ‘ λμ§λ§ κ²μ νμλ ν λ²λ§ λ λμ΄λλ€.
 * 
 */