console.log("hello World");
let a;
let time;
let date;

setInterval(() => {
  a = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  date = a.toLocaleDateString(undefined, options);
//   console.log(date);
  let time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
//   console.log(time);
  document.getElementById("time").innerHTML = time + " On " + date;
}, 1000);
