function dis(val)
{
    document.getElementById("screen").value+=val
}
function clr()
{
    document.getElementById("screen").value=""
}
function solve()
{
    let equation=document.getElementById("screen").value
    let res=eval(equation)
    document.getElementById("screen").value=res
}

function del()
{
 let a=document.getElementById("screen").value
 document.getElementById("screen").value=a.substr(0,a.length-1)
}