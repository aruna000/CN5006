const dateofbirth=" 12/11/2005"
const getstudentname= () => {
    return " write your na,e here"
}
const getcanpusname = () =>{
    return (" university of east london campus") 
}
// exporting function and variable outside the module 
exports.getname=getstudentname
exports.location=getcampusname
exports.dob=dateofbirth
//how to export with parameters
exports.studentgrade=(marks)=>
{
    if (marks>50&& marks<70) return ("B grade")
        else 
    return ("A grade")
}

