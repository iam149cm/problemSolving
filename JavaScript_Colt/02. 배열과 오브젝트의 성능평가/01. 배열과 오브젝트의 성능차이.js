let instructor = {
    firstName : "Kelly" ,
    isInstructor : true,
    favoriteNumbers : [1, 2, 3, 4]
}

// Big O of Objects 
// insertions - O(1) / Removal - O(1) / Searching - O(N) / Access - O(1)
// 객체는 검색을 제외하고 대부분 상수시간이다. (검색과 접근은 다르다.)

let names = [ "Michael" , "Melissa" , "Andrea"];
let values = [ true, {} , [] , 2 , "awesome" ];

// arrays = Ordered list!
// Inserstion, Removal - It depends on 'where' - O(N) / Searching - O(N) / Access - O(1)
// 배열 앞에 추가하거나 제거하면 뒤로 밀리는 것들에 대해 새로 인덱스를 부여해야 한다.
