import { useContext, useEffect} from 'react';
import { WebContext } from '../../context/web_context';
import listCategories from '../../info/info';


import './nav.css'

const Nav = () => {
    const { setListOfProjects,listOfCategories ,currentCategory,setCurrentCategory,languageState} = useContext(WebContext)

    const changeOptions = (name, list) => {
        setCurrentCategory(name)
        setListOfProjects(list);
    }


    return (
        <nav className="nav">
            {listOfCategories.map(value => (
              
                <div className={"item_category"}
                    
                    id = {`${currentCategory === value.name? "selected":""}`}
                    onClick={() => changeOptions(value.name, languageState? value.spanishList:value.englishList)
                    }>
               <img src={value.image} alt ={value.name} />
                    <p>{value.name}</p>
         
           </div>
            ))}
        </nav>
    );
};

export default Nav;