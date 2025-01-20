const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
    let time = new Date();
            
        hrs.innerHTML = time.getHours();
        min.innerHTML = time.getMinutes();
        sec.innerHTML = time.getSeconds();

       
},1000);
if(time.getHours().value > 12){
    time.getHours().value - 12;
}


 //console log for any error
 console.log(time);
 console.log(time.getHours() + "" + "hours");
 console.log(time.getSeconds() + "" + "hours");
 console.log(time.getSeconds() + "" + "hours");
