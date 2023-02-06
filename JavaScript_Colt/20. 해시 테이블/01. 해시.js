/** 🌟 Hash Table (Hash map)
 * - key - value data structure. 기본적으로 빌트인 되어 있는 언어가 많다.  (파이썬-딕셔너리/js-오브젝트,맵/자바-맵..)
 * - colors["cyan"] is better than colors[2] 
 * - How can we get human-readability and computer readability? Computers don't know how to find an element at index pink!
 * 
 * - In order to look up values by key, we need a way to convert keys into valid array indices.
 * - A function that perform this task is called hash function
 * 
 *   0   1   2   3   4   5   6   7   8     ------------ index
 * [   ,   ,   ,   ,   ,   ,   ,   ,   ]  
 *   👆                          👆 
 * ["pink", "#ff69b4"]      ["orangered", "#ff4500"]
 * 
 * input:pink ---(Hash function)--->   output:0   /  input:orangered ---(Hash function)--->  output:7 
 * 
 * 🌟 Hash function
 * - 스트링으로 된 키를 배열에서 사용되는 인덱스, 즉 작은 숫자로 바꿔주는 데 사용한다.
 * - 정보보안, 암호화폐, 암호화 기술 등에 사용.
 * 
 * 함수의 정의 : 임의의 크기를 가지는 데이터를 입력하면 정해진 크기의 데이터를 출력한다. 
 * Q. What makes a goot hash?
 * 1. Fast (i.e. constant time) 
 * - 해시테이블에 crud 할때마다 해싱해야 하는데 오래 걸리면 안된다.
 * 
 * 2. Doesn't cluster outputs at specific indices, but distributes uniformly
 * - 기본적으로 일관된 방식으로 분배해서 다른것들과 겹치지 않게 해야 한다.
 * 
 * 3. Deterministic (same input yields same output)
 * - 결정론적. 특정 입력값을 입력할 때 마다 특정 출력값이 나와야 한다. 불확실성이 있으면 안된다.
 * 
 * 
 * 🌟 Big O (average case)
 * - Insertion : O(1) /  Deletion : O(1) 
 * - Access : O(1) --- 연산의 수가 정해져 있기 때문에 상수값이 나온다. 
 * - but ... 불균형하게 분배가 되어 모든 것이 한 인덱스에 들어있는 경우 O(n) 이 되어 버린다 
 * 
 * Hash function 의 성능에 달려 있다
 * 1. 해시 함수가 얼마나 빠른지
 * 2. 얼마나 고르게 데이터를 분배해서 충돌의 회수를 줄이는지
 * 
 */ 