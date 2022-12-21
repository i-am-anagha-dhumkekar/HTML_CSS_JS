let studentArray=[];

//create class
class Student{
    constructor()
    {
        this.name=undefined;
        this.age=undefined;
        this.gender=undefined;
        this.location=undefined;
    }
    //add
    add(name,age,gender,location)
    {
        let newRecord={
           "name":name,
           "age":age,
           "gender":gender,
           "location":location
        };
        studentArray.push(newRecord);
        console.log(studentArray[0]);
    }
    //list all students
    list()
    {
        studentArray.forEach(student =>{
            console.log("Name: "+student.name+" Age:"+student.age+" Location:"+student.location+" Gender:"+student.gender);
        });
    }
    //edit
    edit(id,name,location1)
    {
        studentArray[id].name=name;
        studentArray[id].location=location1;
    }
    //delete
    deletestudent(id)
    {
        studentArray.splice(id,1);
    }
}
let student=new Student();
let bool=true;
while(bool)
{
    choice=parseInt(window.prompt("Enter your choice: \n 1.Add \n 2.List \n3.Edit \n4.Delete"));
    switch(choice)
    {
        case 1:
            sName=window.prompt("Enter name: ");
            age=parseInt(window.prompt("Enter age: "));
            gender=window.prompt("Enter gender: ");
            location1=window.prompt("Enter location: ");
            if(sName==""||age==""||gender==""||location1=="")
            {
                alert("Wrong input...");
            }
            else{
                student.add(sName,age,gender,location1);
                console.log(student);
            }
            
            break;
        case 2:
            student.list();
            break;
        case 3:
            id=window.prompt("Enter id: ");
            sName=window.prompt("Enter name: ");
            sLocation=window.prompt("Enter location: ");
            if(id==""||sName==""||sLocation=="")
            {
                alert("Wrong input...");
            }
            else{
                student.edit(id,sName,sLocation);
            }
            break;
        case 4:
            id=window.prompt("Enter id: ");
            if(id=="")
            {
                alert("Wrong input...");
            }
            else
            {
                student.deletestudent(id);
            }
            
        default:
            console.log("Invalid");
            break;
    }
    let bool1=window.prompt("Do you want to continue(y/n)? ");
    if(bool1.charAt(0)==='n'||bool1.charAt(0)==='N')
    {
       bool=false;
    }
}