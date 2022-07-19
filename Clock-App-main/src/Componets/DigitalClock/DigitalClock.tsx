import { useEffect,useState } from "react";

import './DigitalClock.css'

export default function DigitalClock() {
  let date = new Date();

  const [day, setDay] = useState<string>(date.getDay().toString());
  const [hours,setHours] = useState<string>();
  const [minutes,setMinutes] = useState<string>();
  const [seconds,setSeconds] = useState<string>();

  const getDay = (day:string): void =>{
    switch(day){
      case "0" :
        setDay("Sun")
      break
      case "1":
        setDay("Mon")
      break;
      case "2" :
        setDay("Tu")
      break
      case "3":
        setDay("We")
      break;
      case "4" :
        setDay("Th")
      break
      case "5":
        setDay("Fr")
      break;
      case "6" :
        setDay("Sa")
      break
      default:setDay("No Days")
      }
  }
  useEffect(()=>{
   
    getDay(day)
    setInterval(()=>{
          date = new Date();
          setSeconds(date.getSeconds().toString())
          setMinutes(date.getMinutes().toString())
          setHours(date.getHours().toString())
          
      },1000)
  
  },[])

  return (
    <div className="digitalClock">
    <div className="digitalClockContainer">

      <div className="dayContainer childContainer">
        <h3 className="Day">{day}</h3>  
        <p>Day</p>
      </div>
    

      <div className="hourContainer childContainer">
        <h3 className="Hours">{hours}</h3>  
        <p>Hours</p>
      </div>

      <div className="minutesContainer childContainer">
        <h3 className="Minutes">{minutes}</h3>  
        <p>Minutes</p>
      </div>

      <div className="secondsContainer childContainer">
        <h3 className="Seconds">{seconds}</h3>  
        <p>Seconds</p>
      </div>
  </div>
    </div>
  )
}
