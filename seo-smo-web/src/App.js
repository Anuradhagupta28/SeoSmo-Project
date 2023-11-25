import logo from './logo.svg';
import "./App.css"
import Home from './Component/Home';

import Navbar2 from './Component/Navbar2';

import Footer from './Component/Footer';
import AllRoute from './Routes/AllRoute';

function App() {
  return (
    <div className="App">
      <Navbar2/>
   <AllRoute/>
      <Footer/>
     
    </div>
  );
}

export default App;
