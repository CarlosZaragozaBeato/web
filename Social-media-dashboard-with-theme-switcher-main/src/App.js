/*Hooks*/ 
import React,{useState} from 'react'

/*Images*/
import upIcon from './images/icon-up.svg'
import downIcon from './images/icon-down.svg'
import facebookIcon from './images/icon-facebook.svg'
import twitterIcon from './images/icon-twitter.svg'
import instagramIcon from './images/icon-instagram.svg'
import youtubeIcon from './images/icon-youtube.svg'


/*Components*/ 
import Header from './components/header/Header'
import PrmCard from './components/cards/PrmCard'
import ScdCard from './components/cards/ScdCard'
function App() {
  /*UseState*/ 
  const[darkMode, setDarkMode] = useState(true)
  const[mainInfo] = useState([
  {/*Followers*/
    name:"@nathanf",
    socialImg:facebookIcon,
    followers:"1987",
    liveFollowers:"12 Today",
    followersState:upIcon,
    nmFollower:"followers",
    classNameProp:"facebookClass",
    
  },
  {/*Followers*/
    name:"@nathanf",
    socialImg: twitterIcon,
    followers:"1044",
    liveFollowers:"99 Today",
    followersState:upIcon,
    nmFollower:"followers",
    classNameProp:"twitterClass"
  },
  {/*Followers*/
    name:"@realnathanf",
    socialImg:instagramIcon,
    followers:"11k",
    liveFollowers:"1099 Today",
    followersState:upIcon,
    nmFollower:"followers",
    classNameProp:"instagramClass"
  },
  {/*Subscribers*/
    name:"Nathan F.",
    socialImg:youtubeIcon,
    followers:"8239",
    liveFollowers:"144 Today",
    followersState:downIcon,
    nmFollower:"subscribers",
    classNameProp:"youtubeClass"
  }

         

])
  const [secondaryInfo] = useState([
    {
      prmInteract:"Page Views",
      prmNumber:"87",
      prmSocialImg:facebookIcon,
      prmRatio:"4%",
      prmIconArrow:upIcon,
      prmClassNameProp:"green",

      scdLikes:"Likes",
      sctNumberLikes:"52",
      scdClassName:"red",
      scdIconArrow:downIcon,
      scdRatio:"2%"
    },
    {
      prmInteract:"Retweets",
      prmNumber:"117",
      prmSocialImg:twitterIcon,
      prmRatio:"303%",
      prmIconArrow:upIcon,
      prmClassNameProp:"green",

      scdLikes:"Likes",
      sctNumberLikes:"507",
      scdClassName:"green",
      scdIconArrow:upIcon,
      scdRatio:"553%"
    },
    {
      prmInteract:"Likes",
      prmNumber:"5462",
      prmSocialImg:instagramIcon,
      prmRatio:"2257%",
      prmIconArrow:upIcon,
      prmClassNameProp:"green",

      scdLikes:"Profile Views",
      sctNumberLikes:"52k",
      scdClassName:"green",
      scdIconArrow:upIcon,
      scdRatio:"1375%"
    },
    {
      prmInteract:"Likes",
      prmNumber:"107",
      prmSocialImg:youtubeIcon,
      prmRatio:"19%",
      prmIconArrow:downIcon,
      prmClassNameProp:"red",

      scdLikes:"Total Views",
      sctNumberLikes:"1407",
      scdClassName:"red",
      scdIconArrow:downIcon,
      scdRatio:"12%"
    }
])

  
return (
    <>
    <div className={`app_Container ${darkMode?"dark": "light"}`}>
      <Header modeProp={mode=>setDarkMode(mode)}/>
    <main className="main">
      <div className="mainContainerCards">
      {mainInfo.map(crd=>(
                    <PrmCard infoProp={crd}
                              modePrp={darkMode}
                              key={Math.random()*100000000}/>))}
      </div>

        <div className="secondSection">
            <h2 className={darkMode?"scdTitleDark":"scdTitleLight"}>Overview - Today</h2>
        <div className="scdContainerCards">  
        {secondaryInfo.map(crdSC=>(
                      <ScdCard infoPropScd={crdSC}
                                modePrp={darkMode}
                                key={Math.random()*100000000}/>))}
        </div>
        </div>
    </main>  
    </div>
    </>
  );
}

export default App;
