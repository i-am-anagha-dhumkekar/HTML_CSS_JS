
let data=[];
function add()
{
    let name=document.getElementById("exampleFormControlInput1").value;
    let email=document.getElementById("exampleFormControlInput2").value;
    let title=document.getElementById("exampleFormControlInput3").value;
    let content=document.getElementById("exampleFormControlTextarea1").value;
    let obj={
        "name":name,
        "email":email,
        "title":title,
        "content":content
    }
    data.push(obj);
    displayall();
    document.getElementById("exampleFormControlInput1").value="";
    document.getElementById("exampleFormControlInput2").value="";
    document.getElementById("exampleFormControlInput3").value="";
    document.getElementById("exampleFormControlTextarea1").value="";
}
function displayall()
{
    let sample="";
    for(let i=0;i<data.length;i++)
    {
        sample+=`<div class="blog bg-light">
        <p>${data[i].name}</p>
        <p>${data[i].email}</p>
        <h3>${data[i].title}</h3>
        <p>${data[i].content}</p>
        </div>`;
    }
    document.getElementById("allblogs").innerHTML=sample;
}
document.getElementById("btn").addEventListener("click", add);