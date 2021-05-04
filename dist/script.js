var startTimestamp=1547308800;
//every 1000 millisecond trigger 'test' function
var myVar = setInterval(test, 1000);
function test() {
  //getTime method return millisecond since the  unix timestamp
  var ms = new Date().getTime();
  var sec = ms / 1000;
  var hour = (sec - startTimestamp) / 3600;
  var n = Math.floor(hour / 24 % 8);
  var a = [
  "24:00-08:00 (1)",
  "24:00-08:00 (2)",
  "08:00-16:00 (1)",
  "08:00-16:00 (2)",
  "16:00-24:00 (1)",
  "16:00-24:00 (2)",
  "休假24:00-24:00 (1)",
  "休假24:00-24:00 (2)"];
  ReactDOM.render(a[n], document.getElementById("location"));
  ReactDOM.render("接下來", document.getElementById("nextlocation"));
  
  if(n==7)
  {
    n=0
  }else
  {
    n++;
  }
  
  ReactDOM.render(a[n], document.getElementById("nextstate"));
}


//以下都沒用到 留起來參考用
/*
function display(seconds) 
{
  var hours = seconds / 3600;
  var minutes = seconds % 3600 / 60;
  seconds %= 60;

  return [hours, minutes, seconds].map(format).join(":");
}


function format(val) {
  return ("0" + Math.floor(val)).slice(-2);
}

function Inv(nextcount) {
  var now = Math.floor(new Date().getTime() / 1000);
  var ttt = Math.floor(now - start);
  var k = Math.floor(ttt / 3600 / 12) + nextcount;
    var tn= n;
  if (tn>=5) {
    tn=tn-5;}
  ;
  var nextInvasion = new Date((start + k * 3600 * 19) * 1000);
  var ampm = nextInvasion.getHours() >= 12 ? nextInvasion.getHours() + ':00 PM' : nextInvasion.getHours() + ':00 AM';
  var weekday = new Array(7);
  weekday[0] = "星期日";
  weekday[1] = "星期一";
  weekday[2] = "星期二";
  weekday[3] = "星期三";
  weekday[4] = "星期四";
  weekday[5] = "星期五";
  weekday[6] = "星期六";
  var outstr = a[tn +  nextcount] + "    " + weekday[nextInvasion.getDay()] + "   " + ampm;
  return outstr;
}*/