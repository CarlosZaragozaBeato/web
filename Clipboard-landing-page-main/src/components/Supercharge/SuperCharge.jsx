


import './SuperCharge.css'


const SuperCharge = ({blacklist,preview,text,logoGoogle,logoIbm,logoMicrosoft,logoHp,logoVector})=>{

    return (
            <article className="article thirdArticle">
                <div className="titleThirdArticle titleArticle">
                    <h2>Supercharge your workflow</h2>
                    <p>We’ve got the tools to boost your productivity.</p>
                </div>
                <div className="contentArticle contentThirdArticle">
                    <div className="firstCardThirdArticle contentCardArticle">
                        <figure>
                            <img src={blacklist} alt="blacklist Icon" />
                        </figure>
                        <h3>Create blacklists</h3>
                        <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                    </div>
                    <div className="secondCardThirdArticle contentCardArticle">
                        <figure>
                            <img src={preview} alt="preview icon" />
                        </figure>
                        <h3>Plain text snippets</h3>
                        <p>Remove unwanted formatting from copied text for a consistent look.</p>
                    </div>
                    <div className="thirdCardThirdArticle contentCardArticle">
                        <figure>
                            <img src={text} alt="text icon" />
                        </figure>
                        <h3>Sneak preview</h3>
                        <p>Quick preview of all snippets on your Clipboard for easy access.</p>
                    </div>    
                </div>
                <div className="logoContainer">
                    <figure className="logoBrands">
                        <img src={logoGoogle} alt="Google Logo" />
                    </figure>
                    <figure className="logoBrands">
                        <img src={logoIbm} alt="Ibm Logo" />
                    </figure>
                    <figure className="logoBrands">
                        <img src={logoMicrosoft} alt="Microsoft Logo" />
                    </figure>
                    <figure className="logoBrands">
                        <img src={logoHp} alt="Hp Logo" />
                    </figure>
                    <figure className="logoBrands">
                        <img src={logoVector} alt="Vector Graphics Logo" />
                    </figure>
                </div>
            </article>
    );

}
export default SuperCharge;