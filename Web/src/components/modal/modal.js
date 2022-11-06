import { useContext, useState } from "react";
import { WebContext } from "../../context/web_context";
import { AiOutlineCloseSquare } from 'react-icons/ai';

import './modal.css'

const Modal = () => {
    const { setOpenModal, modalItem} = useContext(WebContext)

    const [currentImage, setCurrentImage, ] = useState(modalItem.listOfImage[0])

    const changeValues = (value) => {
        setOpenModal(value)
    }
    return (


        <div className="modal">
            <div className="modal_item">


                <div className="header_item">
                    <div className="title">
                        <h3>
                            {modalItem.name}
                        </h3>
                        <p className="subtitle">{modalItem.tag}</p>
                    </div>
                    <AiOutlineCloseSquare className="close_icon"
                        onClick={() => changeValues(false)} />
                </div>
                <div className="body_item">

                    <div className="body_images">
                        
                        <div className="currentImage">
                            <img src={currentImage} />
                        </div>
                        <div className="list_images">
                            {
                                modalItem.listOfImage.map((value) => (
                                    <img src={value} className="image_child"
                                        id = {`${currentImage == value?"selectedImage":""}`}
                                        onClick={() => setCurrentImage(value)} />
                                ))
                            }
                        </div>

                    </div>

                    
                 <div className="body_info">
    
                       <div className="body_info_body"> 
                            {modalItem.steps.map((value) => (<p>{value}</p>))}
                        </div>     

                        <div className="body_info_footer">
                         <p>
                         {modalItem.date}
                         </p>   
                            
                        <a href={modalItem.link}
                                target="_blank"
                                className="link">Github Link</a>
                    </div>
                    </div>
                 
            

                </div>


            </div>


        </div>




    );
};

export default Modal;