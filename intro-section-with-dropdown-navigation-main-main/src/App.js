import {useState} from 'react'

/** Components **/
import Header from './components/Header/Header';
import Main from './components/Main/Main';

/** Images  **/
import logo from './images/logo.svg'
import todoLogo from './images/icon-todo.svg'
import calendarLogo from './images/icon-calendar.svg'
import reminderLogo from './images/icon-reminders.svg'
import planningLogo from './images/icon-planning.svg'
import arrowUp from './images/icon-arrow-up.svg'
import arrowDown from './images/icon-arrow-down.svg'
import menuIcon from './images/icon-menu.svg'
import closeMenuIcon from './images/icon-close-menu.svg'
import dataBiz from './images/client-databiz.svg'
import audioPhile from './images/client-audiophile.svg'
import meet from './images/client-meet.svg'
import maker from './images/client-maker.svg'
import bgImageDesktop from './images/image-hero-desktop.png'
import bgImageMobile from './images/image-hero-mobile.png'



function App() {

  const [bgDark,setBgDark] =useState(true);




  return (

    <div className={`appContainer ${bgDark?"light":"dark"}`}>


      <Header logo={logo} 
              todoLogo={todoLogo}
              calendarLogo={calendarLogo}
              reminderLogo={reminderLogo}
              planningLogo={planningLogo}
              arrowUp={arrowUp}
              arrowDown={arrowDown}
              menuIcon={menuIcon}
              closeMenuIcon={closeMenuIcon}
              bg={(pr)=>setBgDark(pr)}/> 

    <Main dataBizLogo={dataBiz}
          audioPhileLogo={audioPhile}
          meetLogo={meet}
          makerLogo={maker}
          bgDesktop={bgImageDesktop}
          bgMobile={bgImageMobile}/>


    </div>           
  );
}

export default App;
