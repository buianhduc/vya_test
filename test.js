const prompt = require('prompt-sync')();
function findSmallestNumber(arr, res = Infinity, pos = 0){
    if(pos === arr.length){
        return res;
    }
    pos++;
    if(arr[pos] < res){
        res = arr[pos];
    }
    return findSmallestNumber(arr,res,pos);
}


let arr = [];

input = prompt('Enter your array (separated by a space): ');
arr = input.split(' ');
for (var i in arr){
    arr[i] = Number(arr[i]);
}
console.log(findSmallestNumber(arr));
