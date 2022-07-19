
import './header.css';

const Header =({logo})=>{

    return(
    <header className="header">
        <div className="bgHeader">
            <figure className="figureIcon">
                <img src={logo} alt="page icon" className="imgIcon" />
            </figure>
        </div>
        <div className="titleHeader">
            <h1>A history of everything you copy</h1>
            <p>
            Clipboard allows you to track and organize everything you 
            copy. Instantly access your clipboard on all your devices.
            </p>
            <div className="buttonGroup">
                <button className="buttonIos">Download for iOS</button>
                <button className="buttonMac">Download for Mac</button>
            </div>
        </div>
    </header>
    );

}
export default Header;