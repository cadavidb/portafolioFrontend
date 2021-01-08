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

        <li className="nav-item" id="cw" >
        <a href="https://api.whatsapp.com/send?phone=5753113889619&text= Hola!%20Quiero%20contratar%20sus%20servicios!"><img id="wasap" src="https://i.pinimg.com/originals/57/93/fa/5793fa77a347969c747ecf703c2aee90.png" alt="wasa"></img></a>

</li>
        <li className="nav-item" id="cw">
        <a href="https://www.facebook.com/brayan.cadavid.9674" alt="wasa"><img key="facebook" alt="fb" src="https://i.pinimg.com/originals/ce/c8/a6/cec8a6239de29acbfcfee0ccec995b9f.png" id="wasap"></img></a>

</li>
       
      </ul>
    </div>
  </div>
</nav>
    )
}
