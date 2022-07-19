
import './AccessClipboard.css'

const AccessClipboard = ({img})=>{

    return(
            <article className="article secondArticle">
                <div className="titleSecondArticle titleArticle">
                <h2>Access Clipboard anywhere</h2>
                <p>
                    Whether you’re on the go, or at your computer, you can access all your Clipboard 
                    snippets in a few simple clicks.
                </p>
                </div>
                <figure className="figureAccess">
                    <img src={img} alt="devices" />
                </figure>

            </article>
    );  
}
export default AccessClipboard;