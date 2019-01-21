var start = 1547308800;
var b = [];
var myVar = setInterval(test, 1000);
// var t = new Date().getTime();
// var d = t / 1000;
// var h = (d - 1547337600) / 3600;
// var n = Math.floor(h / 12 % 7);
// var l = h % 12;
// var a = [
//  "24:00-08:00",
//   "24:00-08:00 2",
//   "08:00-16:001",
//   "08:00-16:00 2",
//   "16:00-24:00",
//   "16:00-24:00 2",
//   "休假24:00-24:00",
//   "休假24:00-24:00 2"];

function test() {
  var t = new Date().getTime();
  // var t=1548050400000;
  var d = t / 1000;
  var h = (d - 1547308800) / 3600;
  var n = Math.floor(h / 24 % 8);
  // var n=h/24%8;
  // var l = h % 192;
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


//   if (l < 8) {
//     ReactDOM.render("正在上班", document.getElementById("state"));

//    // ReactDOM.render("時間剩餘",      document.getElementById("stateCountdown"));
//    //  ReactDOM.render(
//    //  display(Math.floor((8 - l) * 60 * 60)),
//    //  document.getElementById("countdown"));

//   } else {
//     ReactDOM.render("下次上班", document.getElementById("state"));

//     ReactDOM.render(a[n + 1], document.getElementById("location"));
//     ReactDOM.render(
//     display(Math.floor((12 - l) * 60 * 60)),
//     document.getElementById("countdown"));

//   }



}



function display(seconds) {
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
}


// ReactDOM.render(
// React.createElement("div", null,
//   React.createElement("div", null, Inv(1)),
//   React.createElement("div", null, Inv(2)),
//   React.createElement("div", null, Inv(3))),


// document.getElementById("list"));