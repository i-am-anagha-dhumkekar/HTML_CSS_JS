let str="";
function display(char)
{
  str+=char;
  document.getElementById("result").value=str;
}
function calculate()
{
  let result=eval(str);
  document.getElementById("result").value=result;
}
function clearAll()
{
  str="";
  document.getElementById("result").value="";
}