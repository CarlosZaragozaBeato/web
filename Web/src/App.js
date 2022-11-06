import {WebContext} from "./context/web_context"
import Header from './components/header/header'

import Nav from './components/nav/nav'
import { useState } from "react"
import Body from "./components/body/Body"
import listCategories from "./info/info"
import Modal from "./components/modal/modal"


function App() {
  
  const [listOfCategories] = useState(listCategories)

  const [listOfProjects, setListOfProjects] = useState([])

  const [languageState, setLanguageState] = useState(true)
  
  const [currentCategory, setCurrentCategory] = useState("")

  const [openModal, setOpenModal] = useState(false)

  const [modalItem, setModalItem] = useState({})
  
  const [openModalImage, setOpenModalImage] = useState(false)

  console.log(listOfProjects.length)
  console.log(modalItem)
  return (
    <WebContext.Provider value={{
      listOfCategories,
      listOfProjects, setListOfProjects,
      currentCategory, setCurrentCategory,
      openModal, setOpenModal,
      modalItem, setModalItem,
      openModalImage, setOpenModalImage,
      languageState, setLanguageState
    }}>
      <div className={`${listOfProjects.length ==0? "min": ""} body`}
          id = {`${openModal == true?"hidden":""}`}>

        <Header />
        {openModal ? <Modal />
          : <>
            <Nav />
            <Body />
          </>
        }
        
      </div>
    </WebContext.Provider>
  );
}

export default App;
