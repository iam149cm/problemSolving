/** 🌟 퀵정렬 Quick Sort
 * - 기본적으로 데이터를 정렬하여 배열에 0개 혹은 1개가 남을 때 까지 정렬하는 점을 이용한다.
 * - 피벗포인트라 부르는 단일 요소를 선택하여 수행한다. 해당 숫자보다 작은 숫자를 왼쪽으로 옮기고 큰 숫자는 오른쪽을 옮긴다.
 * - '해당 숫자' 하나는 올바른 위치다. 
 * 
 * - [5, 2, 1, 8, 4, 7, 6, 3] // 5보다 작은 숫자 : 왼쪽, 큰 숫자 : 오른쪽 으로 옮긴다.
 * - 이 과정을 재귀적으로 왼쪽, 오른쪽 반복한다.
 * 
 * 1. 기준 숫자보다 작은 값이 몇개인지 배열에서 파악한다.
 * 2. 작은 숫자가 있으면 기준숫자 옆으로 옮긴다
 * 3. 기준숫자를 올바른 위치로 옮긴다 [ 작은숫자 , 기준숫자, 큰숫자 ]
 * 4. 기준숫자보다 작은 숫자를 정렬한다
 * 5. 다음 기준 숫자를 잡는다 (3번의 기준숫자 다음 숫자)
 * 6. 반복한다 
 * 
 * 🌟 Pivot Helper
 * - 배열이 주어지면 요소를 피벗포인트로 지정하여 배열 속 요소를 재배치
 * - 피벗보다 작은 값 : 왼쪽 / 큰 값 : 오른쪽 (순서는 중요하지 않음)
 * - 헬퍼는 제자리에서 수행하므로 새 배열을 만들지 않는다.
 * - 퀵정렬의 실행 시간은 피벗 선택 위치에 따라 달라질 수 있다. (이상적 : 중간값)
 * - 첫번째, 마지막, 혹은 중간, 마지막 요소 --> 우리는 첫번째 요소로 진행 할 것
 * 
 * 🌟 Big-O
 * - 시간복잡도 : 
 * - Best case : O(n log n) .. 피벗을 찾을 때 O(n), 정렬 할 때 O(log n);
 * - worst case : O(n²) .. 정렬된 경우 + 첫번째 값을 피벗으로 정하지 않으면 회피 가능 (무작위 or 중간값 등)
 * 
 * 
 */