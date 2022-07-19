import Card from "./components/card/Card";
import Header from "./components/header/Header";

import check from './images/icon-check.svg'

function App() {
  return (
      <>
        <Header/>
        <Card check={check}/>
      </>
  );
}

export default App;
