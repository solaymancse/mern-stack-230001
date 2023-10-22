function countWord(arr) {
    const str = arr.split('')

    const counted = str.filter(word => word != '').length;
    return counted;
    

}

const couting = countWord('This is string')
console.log(couting)