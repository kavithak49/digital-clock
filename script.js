
let hourEle = document.getElementById('hours');
let minEle=document.getElementById('minutes');
let secEle = document.getElementById('seconds');
let ampmEle = document.getElementById('ampm');
window.setInterval(()=>{
    updateFunction();
},1000)
function updateFunction()
{
    let currTime = new Date();
    let h=currTime.getHours();
    let m=currTime.getMinutes();
    let s=currTime.getSeconds();
    ampm='AM';
    if(h>11)
    {
        ampm='PM';
    }
    if(h>12)
    {
        h=h-12;
    }
    if(h<10)
    {
        h='0'+h;
    }
    if(m<10)
    {
        m='0'+m;
    }
    if(s<10)
    {
        s='0'+s;
    }
    hourEle.innerText=h;
    minEle.innerText=m;
    secEle.innerText=s;
    
}