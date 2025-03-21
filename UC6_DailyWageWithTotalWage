const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
const WAGE_PER_HOUR = 20;

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case 1:
            return 4; //PART_TIME_HOURS
        case 2:
            return 8;  //FULL_TIME_HOURS
        default:
            return 0;
    }
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math. floor (Math. random () * 10) % 3;
    let empHrs = getWorkingHours (empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs)) ;
}

let empWage = calcDailyWage(totalEmpHrs) ;
console. log("Total Days: " + totalWorkingDays +"\nTotal Hrs: " + totalEmpHrs + "\nEmp Wage: " + empWage);