function solve(year,month,day) {
    let dateInString = String(year)+ '-' + String(month) + '-' + String(day);

    let date = new Date(dateInString);
    let yesterday = new Date(date);
    yesterday.setDate(yesterday.getDate() - 1);

    let dateString =  yesterday.getFullYear() + "-" +
     (yesterday.getMonth() + 1) + "-" + yesterday.getDate();

    return dateString;
}

console.log(solve(2016, 10, 1));