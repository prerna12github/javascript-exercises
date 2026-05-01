const add = function(num1,num2) {
  return num1+num2;
	
};

const subtract = function(num1,num2) {
  return num1-num2;
	
};

const sum = function(num) {
  let sum=0;
  let le=num.length;
  for (let i=0;i<le;i++){
    sum=sum+num[i];
  }
  return sum;

	
};

const multiply = function(num) {
  let mul=1;
  let le=num.length;
  for (let i=0;i<le;i++){
    mul=mul*num[i];
  }
  return mul;

};

const power = function(base,exp) {
  return Math.pow(base,exp);
	
};

const factorial = function(num) {
  if (num==0){
    return 1;
  }
  else if(num<0){
    return 'ERROR';
  }
  else{
    let f=1;
    for (let i=1;i<=num;i++){
            f=f*i;
  }
  return f;
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
