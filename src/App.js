// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About US" />
      {/* <Navbar title={3} /> */}
      {/* <Navbar /> */}
      <div className="container my-3">
        <TextForm title="Enter the text hear to analys" />
      </div>
      <About />
    </>
  );
}

export default App;
