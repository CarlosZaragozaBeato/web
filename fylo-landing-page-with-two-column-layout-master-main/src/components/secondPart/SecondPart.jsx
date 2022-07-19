
import './SecondPart.css'
const SecondPart = ({bgImage2,arrow,quote,avatar}) => {
    return ( 

        <div className="secondPart">
      
            <div className="containerSecondPart">

  
                <div className="titleSecondPart">
                    <h2>Stay productive, wherever you are</h2>
                    <p> Never let location be an issue when accessing your files. Fylo has you 
                        covered for all of your file storage needs.
                    </p>
                    <p>Securely share files and folders with friends, family and colleagues for 
                        live collaboration. No email attachments required!
                    </p>
                    <div className="works">
                        <p>See how Fylo works
                        <figure>
                            <img src={arrow} alt="arrow icon" />
                        </figure>
                        </p>
                   
                    </div>
                    <div className="quote">
                        <figure className="figureQuote">
                            <img src={quote} alt="quote icon" />
                        </figure>
                        <p>
                            Fylo has improved our team productivity by an order of magnitude. Since 
                            making the switch our team has become a well-oiled collaboration machine.
                        </p>
                        <div className="avatar">
                            <figure>
                                <img src={avatar} alt="avatar icon" />
                            </figure>
                            <div className="avatarContent">
                                <h3>Kyle Burton</h3>
                                <p>Founder & CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bgImage">
                    <figure>
                        <img src={bgImage2} alt="background image" />
                    </figure>
                </div>
                </div>
        </div>

     );
}
 
export default SecondPart;