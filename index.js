function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

function getHours(s){
    s%=43200;
    return ((360*s/43200)+180)%360;
}

function getMinutes(s){
    s%=3600;
    return ((6*s/60)+180)%360;
}

function getSeconds(s){
    s%=60;
    return ((6*s)+180)%360;
}
var hours=document.querySelector(".hours");
var minutes=document.querySelector(".minutes");
var seconds=document.querySelector(".seconds");

setInterval(()=>{
    var s=getSecondsSinceStartOfDay();
    hours.style.transform = `rotate(${getHours(s)}deg)`;
    minutes.style.transform = `rotate(${getMinutes(s)}deg)`;
    seconds.style.transform = `rotate(${getSeconds(s)}deg)`;

},1000)