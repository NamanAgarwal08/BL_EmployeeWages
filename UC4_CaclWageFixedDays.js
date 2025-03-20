// Calculating wages for a month assuming 20 days in a month

const NUM_OF_WORKING_DAYS = 20;
const WAGE_PER_HOUR = 20;


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

let empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math. floor (Math. random () * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
                  
let empWage = empHrs * WAGE_PER_HOUR;
console. log("Total Hrs: " +empHrs+"\nEmp Wage: " + empWage) ; 