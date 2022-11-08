class course{
    constructor(code,name){
        this.code = code
        this.name = name
    }
}
let ACIT1630 = new course('ACIT 1630','Database')
let ACIT1310 = new course('ACIT 1310','Math')
let ACIT1620 = new course('ACIT 1620','Fundamental Web Technologies')

const courselist = [
    ACIT1310,ACIT1620,ACIT1630,
];

function main(){
    user = user_prompt()
    for (let i = 0; i < courselist.length; i++) {
        if (user == courselist[i].code.split(' ')[1]){
            console.log(`Yes I am taking the course: ${courselist[i]["code"]} - ${courselist[i]["name"]}`);
            break;
        }
        else if (i === courselist.length-1){
            let st= 'ACIT ';
            st += user;
            courselist.push(st);
            courselist[(courselist.length)-1] = new course(st , null)
            break;
        }
    }
    console.log(courselist)
    return
}
function user_prompt(){
    return '16201'
    // return  prompt('This is a prompt' , 'Test');
}
main()