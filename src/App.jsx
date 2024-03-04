import { useState } from "react";
import NavBar from "./Components/Navbar";


function App() {

  const [isLogedIn, setIsLogedIn] = useState(false);
  function checkLogedIn(value){
    setIsLogedIn(value);
  }


  return (
    <div className="w-screen h-screen bg-[#070720]">
      <div className="w-2/3 m-auto">
        <NavBar checkLogedIn={checkLogedIn}/>
      </div>
    </div>
  );
}

export default App;
