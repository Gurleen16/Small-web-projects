var start = document.getElementById('start');
var pause = document.getElementById('pause');
var reset = document.getElementById('reset');
var input = document.getElementById('input');
var time;
start.onclick=function(){
  if(input.value=='')
  alert("Enter value");
  else if (input.value<0 || input.value>100) {
    alert("WRONG INPUT");
  }
  else {
    time=input.value;
    var setTimer = setInterval(function(){
      if(time==0)
      {
        alert("Done");
        input.value='';
        clearInterval(setTimer);
      }
      else {
        time=time-1;
        input.value=time;
      }
    },1000);
    pause.onclick=function(){
      clearInterval(setTimer);
    }
    reset.onclick=function(){
      clearInterval(setTimer);
      input.value='';
    }
  }
}
