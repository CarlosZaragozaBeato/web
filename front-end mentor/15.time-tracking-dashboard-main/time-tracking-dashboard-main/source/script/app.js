const btnDaily = document.getElementById("daily");
const btnWeekly = document.getElementById("weekly");
const btnMonthly = document.getElementById("monthly");
let hours = document.querySelectorAll('.time');
let previous = document.querySelectorAll('.previous')
let data =[
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7
        },
        weekly: {
          current: 32,
          previous: 36
        },
        monthly: {
          current: 103,
          previous: 128
        }
      }
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2
        },
        weekly: {
          current: 10,
          previous: 8
        },
        monthly: {
          current: 23,
          previous: 29
        }
      }
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 7
        },
        monthly: {
          current: 13,
          previous: 19
        }
      }
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 5
        },
        monthly: {
          current: 11,
          previous: 18
        }
      }
    },
    {
      title: "Social",
      timeframes :{
        daily: {
          current: 1,
          previous: 3
        },
        weekly: {
          current: 5,
          previous: 10
        },
        monthly: {
          current: 21,
          previous: 23
        }
      }
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 2,
          previous: 2
        },
        monthly: {
          current: 7,
          previous: 11
        }
      }
    }
  ]
  


function daily(){
  for(let i=0;i<hours.length;i++){
    hours[i].textContent=data[i].timeframes.daily.current +"hrs";
    previous[i].textContent=    "last week - " + data[i].timeframes.daily.previous+" hours";
}

btnDaily.classList.add("focus");
btnWeekly.classList.remove("focus");
btnMonthly.classList.remove("focus");

}
function weekly(){
    for(let i=0;i<hours.length;i++){
        hours[i].textContent=data[i].timeframes.weekly.current +"hrs";
   previous[i].textContent=    "last week - " + data[i].timeframes.weekly.previous+" hours";
    }
    btnWeekly.classList.add("focus");
    btnDaily.classList.remove("focus");
    btnMonthly.classList.remove("focus");
}
function monthly(){
  for(let i=0;i<hours.length;i++){
    hours[i].textContent=data[i].timeframes.monthly.current +"hrs";
    previous[i].textContent=    "last week - " + data[i].timeframes.monthly.previous+" hours";
}

btnMonthly.classList.add("focus");
btnDaily.classList.remove("focus");
btnWeekly.classList.remove("focus");

}

btnDaily.onclick=function(){
  daily();
  
}
btnWeekly.onclick=function(){
  weekly();
}
btnMonthly.onclick=function(){
  monthly();
}
daily();