import {Link} from 'react-router-dom'
import './Home.css'
const Home = ({bgHandler}) => {
    return ( 
        <div className="homeComponent">
                <div className="infoHome">
                    <div className="infoContainer">

 
                    <h2 className="subTitle">So, you want to travel to</h2>
                    <h1 className="Title">Space</h1>
                    <p className="description">
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>    

                    </div>
                </div>
                
                <Link  to="space-tourism-website-main/Destination"  onClick={()=>bgHandler("destination")}className="linkExplore">
                <div className="exploreSection">
                    <h2 className="explore">
                            Explore
                       
                    </h2>
                </div>
                </Link>
                

        </div>
     );
}
 
export default Home;