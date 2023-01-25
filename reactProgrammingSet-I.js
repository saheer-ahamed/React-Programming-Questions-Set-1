function takeInput(strI, strII) {
    var splitStrI = strI.split('')
    var splitStrII = strII.split('')

    var mergedArray = [...splitStrI, ...splitStrII]
    var longestCommonSubstr = []

    for (var i = 0; i < mergedArray.length - 1; i++){
        var flag = 0;
        for( var j = i+1; j < mergedArray.length; j++){
            if(mergedArray[i] == mergedArray[j] && i != j && mergedArray[i] != -1){
                mergedArray[j] = -1
                if(flag == 0){
                    longestCommonSubstr.push(mergedArray[i])
                    flag++
                }
            }
        }
    }
    return longestCommonSubstr.join('')
}

console.log(takeInput('ahamed', 'saheer'))