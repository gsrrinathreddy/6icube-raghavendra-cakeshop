import React from 'react';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/index';
// import Hotstar from './pages/Hotstar';
// import Prime from './pages/Prime';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <BrowserRouter>
      <Routes>


        <Route path = "Hotstar" element ={<Hotstar/>}/>
        <Route path = "Prime" element= {<Prime/>}/>
      </Routes>
      
      
      </BrowserRouter> */}
  
    </div>
  );
}

export default App;
