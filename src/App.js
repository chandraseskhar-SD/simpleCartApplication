import React from "react";
import Cart from "./components/Cart";
import { BrowserRouter,Router,Routes,Route } from "react-router-dom";
import Display from "./components/Display";
import Memorise from "./components/Memorise";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path ='/' element={<Cart/>}></Route>
        <Route exact path ='/Display' element={<Display/>}></Route>
        {/* <Route exact path ='/Display/:userid' element={<Display/>}></Route> */}
      </Routes>
      </BrowserRouter>
      {/* <Memorise/> */}
    </div>
  );
}

export default App;
