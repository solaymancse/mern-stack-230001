function findLeapYear(year){
    if(year % 400 === 0 || (year % 100 != 0 && year % 4 ===0 )){
        console.log("this is leap year")
    }else{
        console.log("not leap year")
    }
}

findLeapYear(1996)