/** 🌟 Dynamic Programming
 * - A method for solving a complex problem by breaking it down into a collection of simpler subproblems,
 * solving each of those subproblems just once, and storing their solutions.
 * - 복잡한 문제를 더 간단한 하위 문제의 모음으로 쪼개서 각 하위 문제들을 풀어서 그 답을 저장하는 방식.
 * 
 * - .... Q.here does the name come from? 
 * - 코드 / 현실(수학) 의 영역에서 최적의 해답을 찾아내는 것.
 * 
 * 🌟 Q. 언제 이 방법을 사용할 수 있는가? 👉 아래 두 가지가 있는지 확인해야 함.
 * 1. Overlapping Subproblems 반복되는 하위 문제 
 * - A problem is said to have overlapping subproblmes if it can be broken down into subproblems which are reused several times.
 * - 즉 한 문제를 더 작은 문제들로 나눌 수 있고, 그 조각들 중 일부가 재활용 가능하다는 뜻.
 * 
 * ex) 피보나치 수열 Fibonacci sequence : Every number after the first two is the sum of the two preceding ones.
 * [1, 1, 2, 3, 5, 8, 13, ...] 
 * - 다섯번째 피보나치 수를 찾기 위해서는 세번째 수를 두 번 계산해야 한다.
 * - 다섯번째 수를 구하기 위해 네번째 수가 필요함. 네번째 수를 구하려면 세번째와 두번째를 더해야 함.
 * - 세번째를 구하려면 두번째와 첫번째를 더해야 함.
 * 
 * ex) 반복되지 않는 문제들이 포함된 예시 - 합병 정렬 Merge Sort. 
 * - [10, 24, 73, 77] : 쪼개기는 하지만 중첩되지는 않는다. 매번 다른 값의 조각을 정렬한다.
 * - 만약 [10, 24, 10, 24] 라면 반복되는 문제가 생기고 동적 프로그래밍을 사용할 수 있다. (드문 경우)
 * 
 * 
 * 2. Optimal Substructure 최적 부분 구조
 * - A problem is said to have potimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems
 * - 하위 문제의 최적 해답을 통해서 더 큰 범주의 문제의 최저 해답을 구성할 수 있는 경우 해당 문제가 최적 부분 구조를 가진다고 한다.
 * - 다섯번째 피보나치 수를 찾는 최적의 해답은 네번째 세번째 피보나치 수를 구해서 더하는 것.
 * - 그래프에서 정점 사이의 최단 경로를 찾는 것 : A->D [A-B-C-D] / A->C [A-B-C] / A-B [A-B]
 * 
 * ex) 최적 부분 구조를 가지고 있지 않은 예시 - 최저가 항공권 찾기 (SFO -> FAI)
 * 1. [ SFO - SEA - FAI ] - SFO -> FAI 까지 가는 최저가는 SEA 를 경유하는 것
 * 2. [ SFO - PDX - SEA ] - SFO -> SEA 까지 가는 최저가는 PDX 를 경유하는 것. 1에는 PDX 가 없다.
 * 
 */