import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import InputBox from "./Components/inputbox";

function App() {
  let [mode, setMode] = useState("light");
  let [alert, setAlert] = useState(false);

  const handleDissmiss = () => {
    setAlert(false);
  };

  const showAlert = (type, message) => {
    setAlert({
      message: message,
      type: type,
    });
  };

  setTimeout(() => {
    setAlert();
  }, 5000);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <div className={`App${mode}`}>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} dissmiss={handleDissmiss} />
      <InputBox mode={mode} showAlert={showAlert} />
      <About />
    </div>
  );
}

export default App;
