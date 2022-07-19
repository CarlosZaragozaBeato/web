import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NavBar from "./NavBar";
import Shop from "./Shop";
function App() {
  return (
    <>

    <Router>
      <NavBar/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
