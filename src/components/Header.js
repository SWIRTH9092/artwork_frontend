//----------------------
//  Import Dependencies
//----------------------

import { Link } from "react-router-dom"

//----------------------
//  Header
//----------------------


function Header(props) {
  
    //Sytling
    const headerContainer = {
        textAlign: "center",
        backgroundColor: "#0B2027",
        color: "#F6F1D1",
        height: "8rem"
     }
  
     const navBar = {
        textDecoration: "none",
        color: "#F6F1D1"
     }
  
    return (
    <div style={headerContainer}>
        <br></br>
        <h1>Grandma's Art Collection</h1>
        <nav>
            <Link to="/" style={navBar}>
               <div>Home</div>
            </Link>
        </nav>
    </div>
  )
}
//----------------------
//  Export header
//----------------------

export default Header