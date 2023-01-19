

function areThereDuplicate(...args) {
    let isDuplicate = true;
    const argSet = new Set(args);
    if (argSet.size == args.length) {
        isDuplicate = false;
    } 
    console.log("isDuplicate : ", isDuplicate );
    return isDuplicate;
}



areThereDuplicate(1,2,3);

areThereDuplicate(1,2,2);
areThereDuplicate('a','b','c','a');