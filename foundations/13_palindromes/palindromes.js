const palindromes = function (string) {

    let fs=string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    fstr=fs.replace(/\s/g, "");
    console.log(fstr);
    let rev='';
    le=fstr.length;
    for (let i=le-1;i>=0;i--){
        rev=rev+fstr[i];
    }
    console.log(rev);
    if (rev.toUpperCase()===fstr.toUpperCase()){
        return true;
    }
    else{
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
