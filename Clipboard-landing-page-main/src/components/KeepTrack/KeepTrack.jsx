import './KeepTrack.css' 



const KeepTrack = ({img})=>{

     return(
          <article className="article firstArticle">
             
               <div className="titleFirstArticle titleArticle">
               <h2>Keep track of your snippets</h2> 
               <p> 
                    Clipboard instantly stores any item you copy in the cloud, 
                    meaning you can access your snippets immediately on all your 
                    devices. Our Mac and iOS apps will help you organize everything.
               </p>
               </div>
         
               <div className="firstArticleContent">
                   <figure className="figureFirstArticle">
                         <img src={img} alt="" />
                    </figure> 
                    <div class="firstArticleInfo">
                         <div className="CardFirstArticle">
                              <h3>Quick Search</h3>
                              <p>Easily search your snippets by content, category, web address, application, and more.</p>
                         </div>
                         <div className="CardFirstArticle">
                              <h3>iCloud Sync</h3>
                              <p>Instantly saves and syncs snippets across all your devices.</p>
                         </div>
                         <div className="CardFirstArticle">
                              <h3>Complete History</h3>
                              <p>Retrieve any snippets from the first moment you started using the app.</p>
                         </div>
                    </div>
               </div>

          </article>
     );

}
export default KeepTrack;