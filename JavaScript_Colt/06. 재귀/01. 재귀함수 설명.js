/** ✨ 재귀 Recursion 의 개념
 * - 마틴과 드래곤
 * - 한 가지 문제를 가지고 어떤 종료점에 도달할 때 까지 더 작은 부분이나 변경되는 부분에서 반복적으로 수행하는 것
 * 
 * ✨ What is Recursion??
 * - A process  (a function in our case) that calls itself.
 * - 자기자신을 호출하는 절차. 재귀함수는 자기자신을 호출한다. 
 * 
 * ✨ Why we should know this ?
 * - It's everywhere! (JSON.parse / JSON.stringify)
 * - ex) walk 함수 안에서 walk 를 또 호출 .... 
 * - 반복문보다 재귀를 사용하는 것이 나을 수도 있다.
 * 
 * ✨ 재귀함수가 자기자신을 계속 호출한다면 무슨 일이 일어날까?
 * - 함수가 호출될 때 눈에 보이지 않는 순서가 있다. (함수가 올바른 순서로 호출되어야 함)
 * - 이를 자바스크립트에서는 call stack 이라고 한다. 
 * - 함수를 호출하면 호출 스택의 맨 위에 올라간다 (서류더미에 새로운 서류가 맨 꼭대기에 있음)
 * - 자바스크립트가 return을 확인하거나 더 실행할 코드가 없으면 컴파일러가 스택 맨 위의 항목을 제거한다 
 * 
 * 
 */

function takeShower() {
    return "Showering!";
}

function eatBreakfast() {
    let meal = cookFood();
    return `Eating ${meal}`;
}

function cookFood() {
    let items = [ "Oatmeal", "Eggs" , "Protein shake" ]
    return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
    takeShower();
    eatBreakfast();
    console.log("ready to go to work!");
}

wakeUp(); // 이 함수를 실행할 경우의 call Stack
/**
 * ✨ 함수를 호출하면 함수가 스택의 꼭대기에 추가되고, 마찬가지로 꼭대기에서 한 번에 하나씩 제거된다.
 * 
 * cookFood
 * EatBrakfast ---- 위 cookFood 가 긑날떄까지 기다리고 있음
 * wakeUp --- 내부 함수들이 끝날때까지 기다리고 있음
 * 
 * ✨ 재귀함수는 자기자신을 계속 호출하기 때문에 call 스택에 자기자신이 계속 쌓인다
 * ✨ 호출스택은 자바스크립트의 보이지 않는 곳에서 작동하는 정적 데이터구조이다.
 * 
 */

