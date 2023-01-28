function solution(n) {
    var answer = 0;
   
    for(var i=0; i <= i+n ; i++) {
        console.log('i-',i, ' n-',n)
        
        if (n % 2 == 0) {
            answer += n;
            n -= 2;
        }else {
            n-= 1;
        }
    }
    console.log('answer : ',answer);
    return answer;
}

 
console.log(solution(7)); // 2+4+6 = 12
console.log(solution(17)); // 2+4+6+8+10+12+14+16 