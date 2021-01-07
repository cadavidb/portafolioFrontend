import React from 'react'
import {Link} from 'react-router-dom'
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
   <Link className="navbar-brand" to="/">Brayan Cadavid</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link className="nav-link active" aria-current="page" to="/about">Acerca de mi</Link>
        </li>
        
        <li className="nav-item">
         <Link className="nav-link" to="/proyectos">Proyectos</Link>
        </li>

        <li className="nav-item">
         <Link className="nav-link" to="contacto">contactame</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    )
}
