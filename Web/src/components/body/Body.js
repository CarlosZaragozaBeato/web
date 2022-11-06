import { useContext, useState } from 'react';
import { WebContext } from '../../context/web_context';
import Modal from '../modal/modal';

import './Body.css'


const Body = () => {
   
    const { listOfProjects,
        setOpenModal, openModal,
        setModalItem }
        = useContext(WebContext)
    

    const changeModal = (condition, item) => {
        setOpenModal(condition);
        setModalItem(item)
    }

    return (


        <main className="main" >


            
            {listOfProjects.map((value) => (

                
                <div className="project_item">
                    
                    <div className='img_container'>
                        <img src={value.mainImage} alt={listOfProjects.name} />
                    </div>
                    <div className ="card_body">
                        <div className='card_title'>
                            <h2>
                                {value.name} 
                            </h2>
                            <p className="subtitle">
                                {value.tag}
                            </p>
                        </div>
                        <div className ="card_content">
            

                            <div className ="footer_section">
                                <p>
                                    {value.date}
                                </p>
                                <button onClick={()=>changeModal(true, value)}>
                                        Show More
                                </button>
                                
                          </div>
                       </div>
                    </div>
               </div>
            ))}
      
           

        </main>
    );
};

export default Body;