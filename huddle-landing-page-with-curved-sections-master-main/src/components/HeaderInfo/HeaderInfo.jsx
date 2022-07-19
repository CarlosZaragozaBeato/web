import "./HeaderInfo.css"

const HeaderInfo = ({illustration}) => {
    return ( 

        <div className="HeaderInfo">
            <div className="headerData">
                <h1>Build The Community Your Fans Will Love</h1>
                <p>Huddle re-imagines the way we build communities. You have a voice, but so does 
                your audience. Create connections with your users as you engage in genuine discussion.</p>
                <button>Get Started For Free</button>
            </div>
            <figure>
                <img src={illustration} alt="illustration Header" />
            </figure>
        </div>
     );
}
 
export default HeaderInfo;