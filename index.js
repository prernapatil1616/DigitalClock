setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

//   const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let day = time.getDate();
  let month = time.getMonth()+1;
  let year = time.getFullYear();
  am_pm = "AM";

  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "PM";
  } else if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }
  month = month < 10 ? "0" + month : month;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec +" "+ am_pm + "\n" + day + "/" + month + "/" + year;

  
//   let currentTime = hour + ":" + min + ":" + sec +" "+ am_pm + "\n" + day + "/" + month[m] + "/" + year;
//   let currentDate = ;

  document.getElementById("clock").innerHTML = currentTime;
//   document.getElementById("calander").innerHTML = currentDate;
}

showTime();
