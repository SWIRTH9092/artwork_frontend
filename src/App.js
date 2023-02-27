//---------------------------------------
//   Import Dependencies
//---------------------------------------


import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
//---------------------------------------
//   App
//---------------------------------------

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

//---------------------------------------
//   Export
//---------------------------------------

export default App;
