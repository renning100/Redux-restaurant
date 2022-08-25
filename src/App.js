import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Menubar from "./components/Menubar";
import Dishbar from "./components/Dishbar";
import ScrollButton from "./components/ScrollButton";
import { useState } from "react";
import Cart from "./components/Cartbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e);
  };
  const [click,setClick]=useState("");
  const handleclick=(data)=>{
    setClick(data);
  }
  return (
    <Router>
      <Navbar />
      <Background />
      <div className="ContainerApp">
        <div className="main1">
          <Menubar childToParent={handleChange} childToParentclick={handleclick} />
        </div>
        <div className="main2">
          <Dishbar parentToChild={searchTerm} parentToChildclick={click}/>
        </div>
        <div className="main3">
          <Cart />
        </div>
      </div>
      <ScrollButton />
    </Router>
  );
}

export default App;
