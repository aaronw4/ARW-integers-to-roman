var intToRoman = function(num) {
    let sArr = num.toString().split('')
    let numArr = sArr.map(s => parseInt(s))
    let placeKeeper = numArr.length - 1
    let romStr = ""

    if (placeKeeper === 3) {
        romStr = thousands(numArr[0])
        romStr = romStr + roman(numArr[1], 'C', 'D', 'M')
        romStr = romStr + roman(numArr[2], 'X', 'L', 'C')
        romStr = romStr + roman(numArr[3], 'I', 'V', 'X')
    }

    if (placeKeeper === 2) {
        romStr = romStr + roman(numArr[0], 'C', 'D', 'M')
        romStr = romStr + roman(numArr[1], 'X', 'L', 'C')
        romStr = romStr + roman(numArr[2], 'I', 'V', 'X')
    }

    if (placeKeeper === 1) {
        romStr = romStr + roman(numArr[0], 'X', 'L', 'C')
        romStr = romStr + roman(numArr[1], 'I', 'V', 'X')
    }

    if (placeKeeper === 0) {
        romStr = romStr + roman(numArr[0], 'I', 'V', 'X')
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

console.log(intToRoman(3999))