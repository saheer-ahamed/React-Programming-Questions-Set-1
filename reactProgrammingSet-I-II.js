function getTwoNumbers(arrayOfInt, target){
    for(var i = 0; i < arrayOfInt.length - 1; i++){
        for(var j = i+1; j < arrayOfInt.length; j++){
            if(arrayOfInt[i] + arrayOfInt[j] == target && i != j){
                return [arrayOfInt[i], arrayOfInt[j]]
            }
        }
    }
}

console.log(getTwoNumbers([1,2,3,4,5,6,10], 11))