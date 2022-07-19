import {useState} from 'react'
import React from 'react'

/** Components **/
import Nav from './components/Nav/Nav';
import HeaderInfo from './components/HeaderInfo/HeaderInfo';
import Cards from './components/Cards/Cards';
import Community from './components/Community/Community';
import Footer from './components/Footer/Footer';

/** Images **/
import logo from './images/logo.svg'
import illustrationHeader from './images/illustration-mockups.svg'
import illustrationConver from './images/illustration-conversation.svg'
import illustrationUser from './images/illustration-your-users.svg'
import illustrationGrow from './images/illustration-grow-together.svg'
import location from './images/icon-location.svg'
import phone from './images/icon-phone.svg'
import email from './images/icon-email.svg'
import logoFooter from './images/logo-Footer.webp'

function App() {

  const [info] = useState([
    {
        title:"Grow Together",
        info:"Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
        img:illustrationGrow,
        class:"normal",

    },
    {

        title:"Flowing Conversations",
        info:"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
        img:illustrationConver,
        class:"reverse",

    },
    {

        title:"Your Users",
        info:"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
        img:illustrationUser,
        class:"normal",

    }
  ])
  return (
  <>
    <header className="header">
        <Nav logo={logo}/>
        <HeaderInfo img={illustrationHeader}/>
    </header>
    <main className="main">
        {info.map(data=> (<Cards data={data}/>))}
        <Community/>
    </main>
    <Footer logoFooter={logoFooter}
            location={location}
            phone={phone}
            email={email}/>
  </>
  );
}

export default App;
