/** 🌟 Comparision Sorts - Average Time Complexity
 * - Bubble Sort - O(n²)
 * - Insertion Sort - O(n²)
 * - Selection Sort - O(n²)
 * - Quick Sort - O(n log(n))
 * - Merge Sort - O(n log(n))
 * 
 * 🌟 Can we do better? 👉 Radix Sort (기수정렬)
 * - Radix sort is a special sorting algorithm that works on lists of numbers
 * - It exploits the fact that information about the size of a nmber is encoded in the number of digits.
 * - 비교가 아닌 다른 방식으로 정렬하게 된다. 
 * - 숫자 크기에 대한 정보를 자릿수로 인코딩한다는 사실을 이용한다. (4자리수 > 2자리수)
 * 
 * 0. 모두 10진수라고 가정
 * 1. 1의 단위 숫자 (n으로 끝나는 숫자) 별로 분류한다 ( 0 ~ 9 의 버킷 )
 * 2. 10의 단위 숫자 별로 분류한다
 * 3. 100의 단위 숫자 별로 분류한다
 * ... 가장 큰 자리 수 숫자 별로 분류한다. 즉 분류의 횟수는 가장 큰 숫자의 자릿수에 달렸다.
 * 
 * 🌟 Big - O
 * - n : 배열의 길이. 정렬하려는 숫자의 길이.
 * - k : 자릿수 (즉 자릿수가 긴 수가 있다면 불리하다)
 * - Time Complexity : O(nk)
 * - Space Complexit : O(n + k) 
 */