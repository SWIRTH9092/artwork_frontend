//---------------------------------------
//   Import Dependencies
//---------------------------------------


import { Outlet } from "react-router-dom"
import Header from "./components/Header"

//---------------------------------------
//   App
//---------------------------------------

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

//---------------------------------------
//   Export
//---------------------------------------

export default App;
