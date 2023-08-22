import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import About from './components/About';
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = (cls) =>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  }
  return (
        <>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Switch>
          <Route exact path="/about"> 
            <About mode={mode} />
          </Route>
           <Route exact path="/">

          <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter,Character Counter,Remove Extra Spaces"
                mode={mode}
                />
            
          </Route>
        </Switch> 

         {/* </Route>
          </Switch>
          {/* <About/> 
          <About/>  */} 
        </div>
       </Router> 
  
    </>
  );
}

export default App;
