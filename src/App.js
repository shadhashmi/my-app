// import logo from '."/l""ogo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import{
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const [mode, setMode] = useState('light')  //whether dark mode is enable or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success") //from alert
      document.title = "Textutils-Dark Mode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success") //from alert
      document.title = "Textutils-Light Mode";
    } 
  }


  //Red Mode
  
  const toggleModeRed = () => {
    if (mode === "light") {
      setMode("Red");
      document.body.style.backgroundColor = "#c35661cc"
      showAlert("Danger mode has been enabled", "success") //from alert
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success") //from alert
    } 
  }


  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils1" about="About" mode={mode} toggleMode={toggleMode}  toggleModeRed={toggleModeRed}/>
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={}></Route>
        </Routes> */}
     <TextForm showAlert={showAlert} h1="Enter the text to analysis below" mode={mode} />
        {/* </Router> */}
        {/* <About/> */}
         </div>
    </>
  );
}
// with the help of props we can change the any text or attribute and re sue it in the different project
export default App;
