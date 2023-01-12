/** 검색 알고리즘
- 순차 검색 : 전체 데이터를 처음부터 끝까지 순서대로 검색
- 이진 검색 : 정렬되어 있는 데이터를 절반으로 나눠서 검색

이진 검색 Binary Search : 주어진 데이터가 오름차순으로 정렬되어 있다고 가정. (정렬되어 있지 않다면 정렬이 선행되어야 한다.)
Devide and Conqure 알고리즘으로 표현하는데 그 의미 그대로 데이터를 절반으로 나눠서 검색하여 순차 검색보다 효율을 높인다.

'중간 인덱스' 값을 찾는 것이 핵심 로직이다. 
ex) Q. 배열 [1, 3, 5, 7, 9] 중 9는 몇번 인덱스에 있는가?
1. 배열을 반으로 나눈다 --> 5 
2. 내가 찾는 9는 5보다 큰가? --> 앞의 [1, 3] 은 버리고 뒤의 [7, 9] 에서 찾는다

mid (중간인덱스) = ( low 가장 낮은 인덱스 + high 가장 높은 인덱스 ) / 2

 */

// 검색알고리즘 Search Algorithm - 주어진 데이터에서 특정 데이터 찾기.
(function() {

    // [1] input
    var data = [ 1, 3, 5, 7, 9 ]; // 데이터가 오름차순으로 정렬 되어 있다고 가정.
    var N = data.length;

    var search = 3; // 검색할 데이터 
    var flag = false; // 찾으면 true, 찾지 못하면 false
    var index = -1 ; // 인덱스 변수 : 찾은 위치.

    // [2] process : 이진검색 (Binary Search). 인덱스 단위로 스캔하여 효율이 더 좋다.
    var low = 0; // min : 가장 작은 인덱스
    var high = N-1; // max : 가장 큰 인덱스

    while (low <= high) { // low 와 high 가 만날 때 까지 반복 실행
        var mid = parseInt((low + high) / 2); // 중간 인덱스 구하기. 정수형으로 변경해주지 않으면 인덱스가 0.5가 됨

        if (data[mid] == search) { // 중간 인덱스에서 찾기
            flag = true;
            index = mid;
            break; // 찾으면 플래그, 인덱스 저장 후 종료
        }

        if (data[mid] > search) { // 내가 찾는 데이터가 중간 인덱스 값보다 작으냐?
            high = mid-1; // 찾을 데이터가 mid 보다 작으면 mid 기준 왼쪽 영역 으로 이동
        } else { 
            low = mid+1; // 찾을 데이터가 mid 보다 크면 mid 기준 오른쪽 영역으로 이동
        }

    }




    // [3] output
    if (flag) {
        console.log(search, "을 (를) ", index , " 인덱스 에서 찾았습니다!");
    } else {
        console.log("검색 결과가 없습니다.");
    }
}) ();