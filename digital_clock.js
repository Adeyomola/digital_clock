function time() {
  const today = new Date();
  const clockDiv = document.getElementById("clockDiv");
  const dayDiv = document.getElementById("dayDiv");
  let hour = today.getHours();
  let minute = today.getMinutes();
  let seconds = today.getSeconds();
  clockDiv.innerText = `${String(hour).padStart(2, "0")}:${String(
    minute
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  let day;
  switch (today.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }
  dayDiv.innerText = day;
}
time();
setInterval(time, 1000);