/** Components **/
import Header from './components/Header/Header'
import FirstPart from './components/firstPart/FirstPart'
import SecondPart from './components/secondPart/SecondPart'
import ThirdPart from './components/thirdPart/ThirdPart'
import Footer from './components/Footer/Footer'
/** Images **/
import logo from './images/logo.svg'
import logo2 from './images/logo2.png'
import bgImage from './images/illustration-1.svg'
import bgImage2 from './images/illustration-2.svg'
import arrow from './images/icon-arrow.svg'
import quote from './images/icon-quotes.svg'
import avatar from './images/avatar-testimonial.jpg'
import phone from './images/icon-phone.svg'
import email from './images/icon-email.svg'
function App() {
  return (
    <>
      <Header logo={logo}/>
      <main className="main">
        <FirstPart bgImage={bgImage}/>
        <SecondPart bgImage2={bgImage2}
                    arrow={arrow} 
                    quote={quote}
                    avatar={avatar}/>
        <ThirdPart/>
      </main>
      <Footer phone={phone}
              mail={email}
              logo={logo2}/>
    </>
  );
}

export default App;
