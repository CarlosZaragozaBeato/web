import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import DigitalClock from './Componets/DigitalClock/DigitalClock';
import Home from './Componets/Home/Home';
import Nav from './Componets/Nav/Nav';


function App() {
  return (
    <div className="App">
      

      <Router>
      <Nav/>


        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/DigitalClock" element={<DigitalClock/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
