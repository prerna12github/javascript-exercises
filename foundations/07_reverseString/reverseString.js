const reverseString = function(string) {
    let  length=string.length;
    let final_string="";
    for (let i=length-1;i>=0;i--){
           final_string=final_string+string[i];
    }
    return final_string;

};

// Do not edit below this line
module.exports = reverseString;
