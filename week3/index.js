//defination of the function employeeinfo
function Employeeinfo (name,salary)
{
    console.log("wellcome" + name+" your monthly salary is " + salary)
}
console.log ("this is my first  programe")
var EmpNAME="ROHAN"
var Empsalary= 5000
//calling the function employeeinfo
Employeeinfo(EmpNAME,Empsalary)
const Empskill= (skill)=>  {
    console.log("Expert in"+skill)
}
Empskill ("java")
const student= require('./StudentInfo')
const person = require('./Person')
// because getName is the function so we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
// because dob is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
// creating new Person
person1= new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInf
o())
console.log("Programe ended")