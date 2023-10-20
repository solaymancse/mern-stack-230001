
let arr = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicate(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}
const result = removeDuplicate(arr);
console.log(result)