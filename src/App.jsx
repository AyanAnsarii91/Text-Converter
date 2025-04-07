import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import About from './components/About'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "white"
      document.title = "Text Converter - Dark Mode"
      showAlert("Dark Mode has been enabled", "success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "black"
      document.title = "Text Converter - Light Mode"
      showAlert("Light Mode has been enabled", "success")
    }
  }

  return (
    <Router>
      <Navbar title="Text converter" aboutText="This is About Section" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze data" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
