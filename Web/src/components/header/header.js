import './header.css'

import { useContext, useEffect } from 'react';
import { WebContext } from '../../context/web_context';

//*Icons
import { AiFillGithub } from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';

//*Images
import eng from '../../assets/images/app/eng.png'
import spanish from '../../assets/images/app/spanish.png'

//*List Of Projects
import listOfProjectsJetpackComposeEnglish from '../../info/compose/info_projects_compose_english';
import listOfProjectsJetpackComposeSpanish from '../../info/compose/info_projects_compose_spanish';


const Header = () => {
    const {languageState, setLanguageState,listOfProjects, setListOfProjects,currentCategory, modalItem, setModalItem} = useContext(WebContext)


   const view = ()=> {
    if(currentCategory!=null){
        if(currentCategory == "Jetpack Compose" && languageState){
            setListOfProjects(listOfProjectsJetpackComposeSpanish)
        }else if(currentCategory == "Jetpack Compose" && languageState == false){
            setListOfProjects(listOfProjectsJetpackComposeEnglish)
            }  
        } 
    }

    const modalView = () =>{
        if(modalItem!=null){
            if(languageState){
                setModalItem(listOfProjectsJetpackComposeSpanish[modalItem.id])
            }else{
                setModalItem(listOfProjectsJetpackComposeEnglish[modalItem.id])    
            }
        }
    }

    useEffect(()=>{
        view()
        modalView()
    },[languageState])



    return (
        <header className="header">
        
                <h1>Carlos</h1>
                <p>Zaragoza Beato</p>

                <div className='header_app'>
                    <figure className='language_box'
                        onClick={() => setLanguageState(!languageState)}>
                            <img src={languageState? eng:spanish}/>
                    </figure>

                <div className='social_media'>
                    <a href="https://github.com/GbatZ2" target="_blank">
                        <AiFillGithub className='git'/>
                    </a>
                </div>
                </div>
        </header>
    );
};

export default Header;