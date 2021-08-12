var intToRoman = function(num) {
    let sArr = num.toString().split('')
    let numArr = sArr.map(s => parseInt(s))
    let placeKeeper = numArr.length - 1
    let fxnArr = [
        roman(numArr[placeKeeper], 'I', 'V', 'X'), 
        roman(numArr[placeKeeper-1], 'X', 'L', 'C'), 
        roman(numArr[placeKeeper-2], 'C', 'D', 'M'), 
        thousands(numArr[0])
    ]
    let romStr = ""

    for (i=placeKeeper; i >= 0; i--) {
        romStr = romStr + fxnArr[i]
    }

    function thousands(num) {
        let mArr = ['M', 'MM', 'MMM']
        return mArr[num-1]
    }

    function roman(num, base, mid, end) {
        let rArr = ['', base, base + base, base + base + base, base + mid, mid, mid + base, mid + base + base, mid + base + base + base, base + end]
        return rArr[num]
    }

    return romStr
};

console.log(intToRoman(1))