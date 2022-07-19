import {useState} from 'react'

/*Components*/
import HeaderInfo from './components/HeaderInfo/HeaderInfo';
import Nav from './components/Nav/Nav'
import Stats from './components/Stats/Stats';
import Cards from './components/Cards/Cards';
import Community from './components/Community/Community';
import Footer from './components/footer/Footer';
/*Images*/ 
import logo  from './images/logo.svg'
import illustrationHeader  from './images/screen-mockups.svg'
import community from './images/icon-communities.svg'
import messages from './images/icon-messages.svg'
import growTogether from './images/illustration-grow-together.svg'
import flowConversation from './images/illustration-flowing-conversation.svg'
import yourUsers from './images/illustration-your-users.svg'
import phone from './images/icon-phone.svg'
import email from './images/icon-email.svg'

function App() {
  const [data] = useState([
    {
      img:community,
      stats:"1.4k+",
      info:"Communities Formed",
    },
    {
      img:messages,
      stats:"2.7m+",
      info:"Messages Sent",
    }
  ])
  const [cards]=useState(
    [
      {
        title:"Grow Together",
        info:"Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
        img:growTogether,
        class:"patternBgTop"
      },
      {
        title:"Flowing Conversations",
        info:"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
        img:flowConversation,
        class:"bgNone"
      },
      {
        title:"Your Users",
        info:"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
        img:yourUsers,
        class:"patternBgBottom"
      }
    ]
  )
  return (
      <>
        <header className="header">
          <Nav logo={logo}/>
          <HeaderInfo illustration={illustrationHeader}/>
          
          <div className="infoContainer">
            {data.map(info=>(
                  <Stats info={info}
                  />
              ))}
           </div>
        </header>
        <main className="main">
              {cards.map(info=>(
                  <Cards dataCard={info}/>
              ))}
        </main>
        <div className="communitySection">
            <Community/>
        </div>
    
              <Footer logo={messages}
                      phone={phone}
                      mail={email}/>
     
      </>
  );
}

export default App;
