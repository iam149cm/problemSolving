// 병합 알고리즘 (병합 정렬) Merge Sort 
// 두 배열을 병합 후 정렬하는 알고리즘. 오름차순으로 정렬되어 있는 정수 배열을 하나로 병합.


// Q. 두 개의 정수 배열을 하나로 합친다. 단, 2개의 배열은 오름차순으로 정렬되어 있다고 가정.
(function() {
    // [1] input
    var first = [ 1, 3, 5 ];
    var second = [ 2, 4 ]; // 오름차순 정렬 
    var M = first.length;
    var N = second.length; // M:N 관행. 

    var merge = []; // 병합된 배열을 담을 그릇
    var i = 0; var j = 0; var k = 0; // i, j, k 관행 (각 배열의 인덱스)

    // [2] process : MERGE 알고리즘
    while ( i < M && j < N) { // 둘 중 하나라도 배열의 끝에 도달 할 때 까지
        if(first[i] < second[j]) {
            merge[k] = first[i]; // 👉 둘 중의 작은 값을 merge 에 넣는다
            k++; // 👉 각 배열의 인덱스를 증가시켜 준다.
            i++;
        } else {
            merge[k++] = second[j++]; // 위의 증가와 동일한 내용
        }
    }
    while ( i < M ) { // 첫번째 배열이 끝까지 도달 할 때 까지
        merge[k++] = first[i++]; 

    }
    while ( j < N) { // 두번째 배열이 끝까지 도달 할 떄 까지
        merge[k++] = second[j++]; 
    }



    // [3] output
    for (let i = 0; i < M+N ; i++) {
        console.log(merge[i]);
        
    }


})();