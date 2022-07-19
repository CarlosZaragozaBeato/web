import bgPattern from '../../images/illustration-devices.svg';
import './main.css'

const Main = ()=>{

    return(


        <main className="main">

            <figure className="figureBg">
                <img src={bgPattern} alt="bg image" className="imgPattern" />
            </figure>

            <div className="mainContainer">
                <p className="new"><span className="span">New</span> <span className="description">Monograph Dashboard</span></p>
                <h1 className="title">Powerful insights into your team</h1>
                <p className="info">Project planning and time tracking for agile teams</p>
                <div className="buttonContainer">
                    <button>
                        Schedule a demo
                    </button>
                    <p>to see a live preview</p>
                </div>
            </div>
            
        </main>
    );

  
}
export default Main;