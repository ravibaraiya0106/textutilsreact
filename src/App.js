import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  function handleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212"; // dark background
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      // setInterval(() => {
      //   showAlert("Download textutils", "info");
      // }, 2000);

      // setInterval(() => {
      //   showAlert("Textutils is the best application", "info");
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"; // light background
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          handlemode={handleMode} // ✅ prop name matches Navbar.js
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/"
            element={
              <div className="container my-3">
                <TextForm
                  showAlert={showAlert}
                  title="Enter the text here to analyze"
                  mode={mode}
                />
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
