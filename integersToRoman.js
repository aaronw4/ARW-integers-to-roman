var intToRoman = function(num) {
    let sArr = num.toString().split('')
    let numArr = sArr.map(s => parseInt(s))
    let placeKeeper = numArr.length - 1
    let romStr = ""

    if (placeKeeper === 3) {
        romStr = thousands(numArr[0])
        romStr = romStr + hundreds(numArr[1])
        romStr = romStr + tens(numArr[2])
        romStr = romStr + ones(numArr[3])
    }

    if (placeKeeper === 2) {
        romStr = romStr + hundreds(numArr[0])
        romStr = romStr + tens(numArr[1])
        romStr = romStr + ones(numArr[2])
    }

    if (placeKeeper === 1) {
        romStr = romStr + tens(numArr[0])
        romStr = romStr + ones(numArr[1])
    }

    if (placeKeeper === 0) {
        romStr = romStr + ones(numArr[0])
    }

    function thousands(num) {
        let mArr = ['M', 'MM', 'MMM']
        return mArr[num-1]
    }

    function hundreds(num) {
        let cArr = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
        return cArr[num]
    }

    function tens(num) {
        let xArr = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
        return xArr[num]
    }

    function ones(num) {
        let iArr = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
        return iArr[num]
    }

    return romStr
};

console.log(intToRoman(10))