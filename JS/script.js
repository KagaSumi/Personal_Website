// Creating a Class Object for each Course
class course {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
}
// Creating some courses for the constant array of courses.
let ACIT1630 = new course("ACIT 1630", "Database Systems");
let ACIT1310 = new course("MATH 1310", "Technical Math for IT");
let ACIT1620 = new course("ACIT 1620", "Fundamental Web Technologies");
let ACIT1420 = new course('ACIT 1420', 'Intro to System Admin');

const courselist = [ACIT1310, ACIT1620, ACIT1630, ACIT1420];


//Take in user input and make sure it is all numbers and length of 4
let user;
do{
user = prompt('Prompt for Courses');;
}while((user.length != 4) || (isNaN(Number(user))))

// For Loop to iterate over the entire course list to see if it is in there. if it is not create a new entry and log that you have added it to the list.
for (let i = 0; i < courselist.length; i++) {
if (user == courselist[i].code.split(" ")[1]) {
    console.log(
    `Yes I am taking the course: ${courselist[i]["code"]} - ${courselist[i]["name"]}`
    );
    break;
} 
else if (i === courselist.length - 1) {
    let st = "ACIT ";
    st += user;
    courselist.push(st);
    courselist[courselist.length - 1] = new course(st, null);
    console.log(`${st} has been logged`)
    break;
}
}