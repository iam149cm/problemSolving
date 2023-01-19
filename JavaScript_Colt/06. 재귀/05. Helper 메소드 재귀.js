/** ✨ Helper method recursion 
 * - 지금까지는 단일 단독 함수 이었음 Single standalone function 
 * (스스로 재귀를 한다. 함수 외부에서 팩토리얼을 호출하면 팩토리얼은 자체 코드 내의 팩토리얼을 호출한다.)
 * 
*/

// ✨Helper method recursion
// 👉 재귀적이지 않은 외부 함수가 재귀적인 내부 함수를 호출하는 패턴.
// 👉 코드 자체로는 실제로 뭘 하지 않는다. 일종의 패턴임.
function outer(input) { // 👉 외부함수를 호출해서 무언가를 내부로 전달할 수 있다
    
    var outerScopedVariable = [];

    function helper(helperInput) { // 👉 내부함수 (재귀함수)
        // modify the outerScopedVariable
        helper(helperInput--);  // 👉 호출이 되어 재귀적으로 자기 자신을 호출한다.
    }
    helper(input);

    return outerScopedVariable;
}


// ✨ ex) Collect all of the odd values in an array!
function collectOddValues(arr) {
    let result = []

    function helper(helperInput) {
        if (helperInput.length === 0) { // 종료조건
            return ; 
        }
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1)) // subarray 를 만들어서 재귀호출
    }
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9]);