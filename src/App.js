import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About'
import React , {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [tcolor,settcolor] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      settcolor('light');
      document.body.style.backgroundColor = '#36454f'
      showAlert("Darkmode has been enabled","success");
      document.title = 'Text App-Dark Mode';
    }
    else{
      setMode('light');
      settcolor('dark');
      document.body.style.backgroundColor = 'white'
      showAlert("lightmode has been enabled","success");
      document.title = 'Text App-light Mode';
    }
  }
  return (
 <>
   <Router>
   <Navbar title="MyApp" mode={mode} toggleMode ={toggleMode} tcolor = {tcolor}/>
   <Alert alert = {alert}/>
   <div className="container my-3">
   <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="/" element={<Textform heading = "Enter a text to analyze" mode ={mode} showAlert={showAlert}/>}/>
  </Routes>
    {/* <Textform heading = "Enter a text to analyze" mode ={mode} showAlert={showAlert}/> */}
   </div> 
   </Router>
 </>
  );
}

export default App;
