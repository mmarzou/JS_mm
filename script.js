// Get time and display it in the header
function checkTime() {
  const time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  setTimeout(checkTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
