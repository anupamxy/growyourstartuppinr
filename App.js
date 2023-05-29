import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Emailsend from './components/Emailsend';
import Speek from './components/Speek';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Contactus from './components/Contactus';


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  } 
  return (
    <>
      <Router>
        <Navbar/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About showAlert={showAlert}/>} />
          <Route exact path="/emailsend" element={<Emailsend showAlert={showAlert} />} />
        
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />



          <Route exact path="/speek" element={<Speek showAlert={showAlert}/>} />
          <Route exact path="/contactus" element={<Contactus showAlert={showAlert}/>} />
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
