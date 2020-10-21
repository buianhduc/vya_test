const prompt = require('prompt-sync')();
function findSmallestNumber(arr, res = Infinity, pos = -1){
    if(pos === arr.length-1){
        return res;
    }
    pos++;
    res = Math.min(res,arr[pos])
    return findSmallestNumber(arr,res,pos);
}


let arr = [];

input = prompt('Enter your array (separated by a space): ');
arr = input.split(' ');
for (const i in arr){
    arr[i] = Number(arr[i]);
}
console.log(findSmallestNumber(arr));
