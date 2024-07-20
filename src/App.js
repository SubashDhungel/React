//npm install @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { useState } from 'react';
import Textform from './components/Textform';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message, type: type 
    })
    setTimeout(() => {
      setAlert(null)
    }, 4000)
  }
  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#000547'
      showAlert("Dark Mode has been enabled", 'primary')

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", 'success')
    }
  }
  return (
    <Router>
      <div>
        <Navbar mode={mode} changeMode={changeMode} title="Netflix" home="Home" about="About Us" contact="Textform" />
        {/* <RouterProvider router={router}></RouterProvider> */}
        <Alert alert={alert} ></Alert>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/textform" element={<Textform mode={mode} title='Enter any Text' textsum='There are ' />} />
          <Route path="/about" element={<About/>} />
        </Routes>

        <Footer mode={mode}></Footer>
      </div>
    </Router>
  );
}

export default App;
