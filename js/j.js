let [seconds , minutes , hours ] = [0 , 0 , 0];
const displayTime = document.querySelector(".displayTime");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");



let timer = null;



function stopWatch(){

   seconds++;
   if(seconds == 60){
      seconds = 0;
      minutes++;
      if(minutes == 60){
         minutes = 0;
         hours++;
      }
   }


 
   let h = hours < 10 ? "0" + hours : hours;
   let m = minutes < 10 ? "0" + minutes : minutes;
   let s = seconds < 10 ? "0" + seconds : seconds;

   displayTime.innerHTML = h + ":" + m + ":" + s ;
}


start.addEventListener("click" , ()=>{

   if(timer !== null){
      clearInterval(timer); // stop not increase 
   }
   
   timer = setInterval(stopWatch , 1000); // 1000 amount of increasing
   
});

stop.addEventListener("click" , ()=>{
   clearInterval(timer); // stop not increase 
});

reset.addEventListener("click" , ()=>{
   clearInterval(timer);
   [seconds , minutes , hours ] = [0 , 0 , 0];
   displayTime.innerHTML = " 00:00:00 "
});
