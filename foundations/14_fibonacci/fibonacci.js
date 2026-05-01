const fibonacci = function(num) {
    let a=1;
    let b=1;
    let c=a+b;
    let fib=[];
    fib.push(a,b,c);
    if(num<0){
        return "OOPS"
    }
    else if(num==0){
        return 0;
    }
    for (let i=2;i<num;i++){
        a=b;
        b=c;
        c=a+b;
        fib.push(c);
    }
    return fib[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
