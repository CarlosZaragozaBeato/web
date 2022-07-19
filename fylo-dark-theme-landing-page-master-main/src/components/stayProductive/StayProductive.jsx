
import './stayProductive.css'

const StayProductive = ({image,icon}) => {
    return (

        <>
            <div className="stayProductive">
                <figure className="stayProductiveImage">
                    <img src={image} alt="background image"/>
                </figure>
                <div className="stayProductiveInfo">
                    <h2>Stay productive, wherever you are</h2>
                    <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                    <div className="works">
                        <a href="#">See how Fylo works </a>
                        <figure>
                            <img src={icon} alt="arrow icon" />
                        </figure>
                    </div>
                    
                </div>
            </div>

        </>
      );
}
 
export default StayProductive;
