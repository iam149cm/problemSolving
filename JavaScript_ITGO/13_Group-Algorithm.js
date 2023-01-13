// 그룹 알고리즘 : 특정 키 값에 해당하는 그룹화된 합계 리스트 만들기.

// Q. 컬렉션 형태의 데이터를 특정 키 값으로 그룹화


(function () {
    
    // [1] input : 테스트용 레코드 JSON 배열
    var records = [
        { Name : "RADIO", Qty : 3},
        { Name : "TV", Qty : 1},
        { Name : "RADIO", Qty : 2},
        { Name : "DVD", Qty : 3}
    ]

    var groups = []; // 출력 데이터
    var N = records.length; // 의사코드

    // [2] process : Group 알고리즘 (SORT -> SUM -> GROUP)
    // [A] 그룹별로 정렬 시켜준다. SORT
    for (let i = 0; i < N-1; i++) {
        for (let j = i+1; j < N; j++) {
          if (records[i].Name > records[j].Name) {
            var temp = records[i];
            records[i] = records[j];
            records[j] = temp;
          } 
        }
    }
    // [B] 그룹 소계 : GROUP
    var groupCount = 0; // 그룹수
    var subtotal = 0; // 소계
    var newRecords = JSON.parse(JSON.stringify(records)); // Deep Copy

    for (let i = 0; i < N; i++) {
        subtotal += newRecords[i].Qty; // 같은 상품명의 수량을 누적 (SUM)

        if (i + 1 == N || // 단락 (short circutin) 이면 아래 조건 무시
             newRecords[i].Name != newRecords[i+1].Name) { // 마지막 레코드 값
            // 현 데이터가 마지막 데이터이다.
            groups.push(newRecords[i]); // JSON 객체를 임시로 추가

            // 다음 레코드가 없거나, 현재 레코드와 다음 레코드가 다르면 저장
            groups[groupCount].Name = newRecords[i].Name; // 한 그룹의 key 지정
            groups[groupCount].Qty = subtotal; // 소계
            groupCount++; // 그룹수 증가
            subtotal = 0; // 하나의 그룹이 완료되면 소계를 초기화

        }
        
    }


    // [3] output
    console.log("1. 정렬된 원본 데이터 : ");
    for (let i = 0; i < N; i++) {
         console.log(records[i].Name , " - " , records[i].Qty);

    }

    console.log("\n2. 이름으로 그룹화된 데이터 : ");
    for (let i = 0; i < groupCount; i++) {
        console.log(groups[i].Name , " - " , groups[i].Qty);
        
    }

})();