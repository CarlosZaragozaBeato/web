

/*images*/ 
import logo from './images/logo.svg'
import Computer from './images/image-computer.png'
import Tablet from './images/image-devices.png'

import blacklist from './images/icon-blacklist.svg'
import preview from './images/icon-preview.svg'
import text from './images/icon-text.svg'

import logoGoogle from './images/logo-google.png'
import logoIbm from './images/logo-ibm.png'
import logoMicrosoft from './images/logo-microsoft.png'
import logoHp from './images/logo-hp.png'
import logoVector from './images/logo-vector-graphics.png'

import facebookIcon from './images/icon-facebook.svg'
import twitterIcon from './images/icon-twitter.svg'
import instagramIcon from './images/icon-instagram.svg'

/** components **/
import Header from './components/header/Header'
import KeepTrack from './components/KeepTrack/KeepTrack'
import AccessClipboard from './components/Access/AccessClipboard'
import SuperCharge from './components/Supercharge/SuperCharge'
import Clipboard from './components/Clipboard/Clipboard'
import Footer from './components/footer/Footer'

function App() {
  return (
   <>
    <Header logo={logo}/>

    <section className="section">
      <KeepTrack img={Computer}/>
      <AccessClipboard img={Tablet}/>
      <SuperCharge blacklist={blacklist} 
                   preview={preview}
                   text={text}
                   logoGoogle={logoGoogle}
                   logoIbm={logoIbm}
                   logoMicrosoft={logoMicrosoft}
                   logoHp={logoHp}
                   logoVector={logoVector}
                   />
      <Clipboard/>
    </section>
    <Footer logo={logo}
            facebook={facebookIcon}
            twitter={twitterIcon}
            instagram={instagramIcon}/>
   </>
  );
}

export default App;
