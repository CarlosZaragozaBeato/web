
import './GetStarted.css'
const GetStarted = ({img}) => {
    return ( 

        <div className="getStarted">
                <figure>
                    <img src={img} alt="background pattern" />
                </figure>
                <div className="getStartedInfo">
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                    <p>Fylo stores all your most important files in one secure location. Access them wherever 
                    you need, share and collaborate with friends family, and co-workers.</p>
                    <button>Get Started</button>
                </div>
                
        </div>

     );
}
 
export default GetStarted;