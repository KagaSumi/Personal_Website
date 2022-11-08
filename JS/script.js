class course {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
}
let ACIT1630 = new course("ACIT 1630", "Database Systems");
let ACIT1310 = new course("MATH 1310", "Technical Math for IT");
let ACIT1620 = new course("ACIT 1620", "Fundamental Web Technologies");
let ACIT1420 = new course('ACIT 1420', 'Intro to System Admin');
const courselist = [ACIT1310, ACIT1620, ACIT1630, ACIT1420];

let user;
do{
user = prompt('Prompt for Courses');;
}while(user.length !== 4 && isNaN(Number(user)))
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