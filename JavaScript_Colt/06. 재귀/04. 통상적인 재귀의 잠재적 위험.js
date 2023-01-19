/** ✨ Common problems whene writing recursion function
 * 1. no base case 
 * 👉 종료조건이 없으면 call stack 에 함수가 끝없이 쌓이게 된다
 * 
 * 2. Forgetting to return or returning the wrong thing!
 * 👉 재귀호출 시 인자가 잘못되었다던가, 종료조건에서 return 을 하지 않는다던가 
 * 👉 호출스택 : 모든 항목이 서로에게 의존하면서 계속 기다리는 것. 
 * 👉 마지막에는 어떤 값을 도출해서 돌려보내야 하기 때문에 return 이 중요하다
 * 
 * 3. Stack overflow!
 * 👉 종료점이 없기 때문에 재귀가 멈취 않는다
 */

