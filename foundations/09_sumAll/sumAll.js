const sumAll = function(num1,num2) {
    if (!Number.isInteger(num1)){
        return "ERROR";
    } 
    else if (!Number.isInteger(num2)){
        return "ERROR";
    }
    else if (num1<0 || num2<0){
        return "ERROR";
    }
    else if (num1<num2){
        sum1=0;
        for (let i=num1;i<=num2;i++){
            sum1=sum1+i;

        }
        return sum1;
    }
    else{
        sum2=0;
        for(let j=num2;j<=num1;j++){
            sum2=sum2+j;
        }
        return sum2;
    }

};

// Do not edit below this line
module.exports = sumAll;
