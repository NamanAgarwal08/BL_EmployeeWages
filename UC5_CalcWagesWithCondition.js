// Calculating Wages till Number of Working Days or Total Working Hours per month is reached

const TOTAL_HRS_IN_MONTH = 160;
const MAX_WORKING_DAYS = 20;
const WAGE_PER_HOUR = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;

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

while (totalEmpHrs < TOTAL_HRS_IN_MONTH && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math. floor (Math. random () * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;

console. log("Total Days: " + totalWorkingDays + "\nTotal Hrs: " + totalEmpHrs + "\nEmp Wage: " + empWage) ;