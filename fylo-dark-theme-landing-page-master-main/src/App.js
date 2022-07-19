import {useState} from 'react'

/**Components**/
import Nav from './components/nav/Nav'
import GetStarted from './components/getStarted/GetStarted'
import Card from './components/CardEspecifications/Card'
import StayProductive from './components/stayProductive/StayProductive'
import Footer from './components/footer/Footer'
import CardReview from './components/reviews/CardReview'
import EarlyAccess from './components/EarlyAccess/EarlyAccess'
/** Images **/
import logo from './images/logo.svg'
import getStartedImage from './images/illustration-intro.png'
import logoAccess from './images/icon-access-anywhere.svg'
import logoSecurity from './images/icon-security.svg'
import logoCollaboration from './images/icon-collaboration.svg'
import logoFile from './images/icon-any-file.svg'
import getProductiveImage from './images/illustration-stay-productive.png'
import arrow from './images/icon-arrow.svg'
import profile1 from './images/profile-1.jpg'
import profile2 from './images/profile-2.jpg'
import profile3 from './images/profile-3.jpg'
import phone from './images/icon-phone.svg'
import email from './images/icon-email.svg'
import facebook from './images/icons8-facebook-nuevo.svg'
import instagram from './images/icons8-instagram.svg'
import twitter from './images/icons8-twitter.svg'
import location from './images/icon-location.svg'


function App() {


  const [specifications]=useState([
    {
      title:"Access your files, anywhere",
      info:"The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
      img:logoAccess
    },
    {
      title:"Security you can trust",
      info:"2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
      img:logoSecurity
    }
    ,
    {
      title:"Real-time collaboration",
      info:"Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
      img:logoCollaboration
    }
    ,
    {
      title:"Store any type of file",
      info:"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
      img:logoFile
    }
  ])

  const [reviews] =useState([
    {
        comment:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.  ",
        avatar: profile1,
        nickname:"Satish Patel",
        rol:"Founder & CEO, Huddle"
    },
    {
        comment:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.  ",
        avatar:profile2,
        nickname:"Bruce McKenzie",
        rol:"Founder & CEO, Huddle"
    }, 
    {
        comment:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.  ",
        avatar:profile3,
        nickname:"Iva Boyd",
        rol:"Founder & CEO, Huddle"
    }
  ])
 
  return (
    <>

          <Nav logo={logo}/>
          <main>
            <GetStarted img={getStartedImage}/>

            <div className="content">
                <div className="cardContainer">      
                {
                  specifications.map(data=>(<Card info={data}/>))
                }
                 </div>
                 <div className="mainContainer">
                    <StayProductive image={getProductiveImage}
                                    icon={arrow}/>
                    <div className="reviews">
                      {
                        reviews.map(data=>(<CardReview info={data}/>))
                      }
                    </div>
                    <div className="earlyAccessContainer">
                        <EarlyAccess/>
                    </div>
                 </div>
                </div>
          </main>
         <Footer logo={logo}
                 phone={phone}
                 email={email}
                 facebook={facebook}
                 twitter={twitter}
                 instagram={instagram}
                 location={location}/>
    </>
  );
}

export default App;
