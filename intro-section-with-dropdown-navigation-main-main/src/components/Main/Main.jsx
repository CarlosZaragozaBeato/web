import './Main.css'
const Main = ({dataBizLogo,audioPhileLogo,meetLogo,makerLogo,bgDesktop,bgMobile}) => {
    return ( 
        <main className="main">

                <div className="mainContainer">
                    <div className="firstPart">

                        <div className="info">  
                            <h1>Make remote work</h1>
                            <p> Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                            <button>Learn more</button>
                        </div>
                        <div className="logosContainer">
                            <figure>
                                <img src={dataBizLogo} alt="DataBiz Logo" />
                            </figure>
                            <figure>
                                <img src={audioPhileLogo} alt="AudioPhile Logo" />
                            </figure>
                            <figure>
                                <img src={meetLogo} alt="Meet Logo" />
                            </figure>
                            <figure>
                                <img src={makerLogo} alt="Maker Logo" />
                            </figure>
                        </div>
                    </div>

                    <picture>
                        <source srcset={bgDesktop} media="(min-width: 800px)"/>
                        <source srcset={bgMobile} media="(max-width: 800px)"/>
                        <img src={bgMobile} alt="background "/>
                    </picture>
                </div>
        </main>
     );
}
 
export default Main;