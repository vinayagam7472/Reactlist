import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
// import Login from "./Login";
import { createContext, useState } from "react";
// import Dash from "./Dash";
export const Data = createContext();

function App() {
   const [name, setName] = useState("vin");
  return (
    <>
      <nav>
        {/* <Link to="/">Home</Link> | <Link to="/about">About</Link> */}
      </nav>
 <Data.Provider value={{ name, setName }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error/>} />
      </Routes>
      </Data.Provider>
    </>
  );
}

export default App;