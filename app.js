const date = document.getElementById("date")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")
const today = new Date();
const weekdays = ["Monday","Tuesday","Wednesday","Thursday","friday","Saturday","Sunday"]
const months = ["January","February","March","April","May","Jun","July","August","September","October","November","December"]
console.log(today)
date.innerHTML = today.getDate()
day.innerHTML = weekdays[today.getDay() -1]
month.innerHTML = months[today.getMonth()]
year.innerHTML = today.getFullYear() 