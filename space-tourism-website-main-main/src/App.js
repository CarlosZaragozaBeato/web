import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import {useState,useEffect} from 'react'
/** Components **/
import Home from "./Home/Home";
import NavBar from "./Nav/NavBar";
import Crew from "./Crew/Crew";
import Techonology from "./Technology/Technology";
/** Images **/ 
/*Nav*/
import logo from './images/Nav/logo.svg'
import menu from './images/Nav/icon-hamburger.svg'
import close from './images/Nav/icon-close.svg'
import Destination from "./Destination/Destination";
/* Destination */ 
import moon from "./images/destination/image-moon.webp";
import mars from "./images/destination/image-mars.webp";
import europa from "./images/destination/image-europa.webp";
import titan from "./images/destination/image-titan.webp";
/** Crew **/ 
import Douglas from './images/crew/image-douglas-hurley.webp'
import Mark from './images/crew/image-mark-shuttleworth.webp'
import Victor from './images/crew/image-victor-glover.webp'
import Anousheh from './images/crew/image-anousheh-ansari.webp'
/** Techonology **/
import vehicleLnd from './images/technology/image-launch-vehicle-landscape.jpg'
import vehiclePrt from './images/technology/image-launch-vehicle-portrait.jpg'
import spaceportLnd from './images/technology/image-spaceport-landscape.jpg'
import spaceportPrt from './images/technology/image-spaceport-portrait.jpg'
import spaceCapsuleLnd from './images/technology/image-space-capsule-landscape.jpg'
import spaceCapsulePrt from './images/technology/image-space-capsule-portrait.jpg'

function App() {


  /** Crew **/
  const[crewInfo] = useState([
    {
      image:Douglas,
      name:"Douglas Hurley",
      rol:"Commander",
      info:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      image:Mark,
      name:"Mark Shuttleworth",
      rol:"Mission Specialist",
      info:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      image:Victor,
      name:"Victor Glover",
      rol:"Pilot",
      info:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
    },
    {
      image:Anousheh,
      name:"Anousheh Ansari",
      rol:"Flight Engineer",
      info:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
    }
  ])

  /** Destination **/
  const[destinationInfo] = useState([

    {
        image:moon,
        name:"Moon",
        info:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        avgDistance:"384,400 km",
        travelTime:"3 days"
    },
    {
      image:mars,
      name:"Mars",
      info:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avgDistance:"225 mil. km",
      travelTime:"9 months"
  },
  {
    image:europa,
    name:"Europa",
    info:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avgDistance:"628 mil. km",
    travelTime:"3 years"
},
{
  image:titan,
  name:"Titan",
  info:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn..",
  avgDistance:"1.6 bil. km",
  travelTime:"7 years"
}
  ])

  /** Techonology **/
  const[techonologyInfo] = useState([
    {
      imageLandScape:vehicleLnd,
      imagePortrait:vehiclePrt,
      name:"Launch vehicle",
      info:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      imageLandScape:spaceportLnd,
      imagePortrait:spaceportPrt,
      name:"Spaceport",
      info:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      imageLandScape:spaceCapsuleLnd,
      imagePortrait:spaceCapsulePrt,
      name:"Space capsule",
      info:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    }
  ])

  const [bgImage,setBgImage] = useState("home");


  


  return (
    <div className={`containerBody ${bgImage}`}>   
      <Router>
      <NavBar logo={logo}
              menuImg={menu}
              close={close}
              bgHandler={(chg=>{setBgImage(chg)})}
              active={bgImage}
              />
      <Routes>
          <Route exact path="space-tourism-website-main/" element={<Home  bgHandler={(chg=>{setBgImage(chg)})}/>}/>
          <Route exact path="space-tourism-website-main/Destination" element={<Destination info={destinationInfo}/>}/>
          <Route exact path="space-tourism-website-main/Crew" element={<Crew info={crewInfo}/>}/>
          <Route exact path="space-tourism-website-main/Technology" element={<Techonology info={techonologyInfo}/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
