
function countNumber(num) {
    console.log(num)
    const newNumber = num - 1
    while (newNumber > 0){
        countNumber(newNumber)
        break;
    }
    return num;
}

const result = countNumber(5)

