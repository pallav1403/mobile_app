import React from 'react'
import { Link } from 'react-router-dom'
export default function NavComp() {
  
    return (
        <div>
             
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="#"><b>Mobile App</b></Link>
  
  <div className ="collapse navbar-collapse" id="navbarText">
    <ul className ="navbar-nav mr-auto">
      <li className ="nav-item active">
        <Link className ="nav-link" to="#"> </Link>
      </li>
     
    </ul>
    <span className="navbar-text">
     <ul className="navbar-nav mr-auto">
     <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
     
     </ul>
    </span>
  </div>
</nav>

    




        </div>
    )
}
