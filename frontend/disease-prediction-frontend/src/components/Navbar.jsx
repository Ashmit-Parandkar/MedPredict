import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position:"absolute", top:"0", left:"10vw", marginBottom:"10vh", zIndex:"100"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{marginRight:"10vw"}}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" style={{marginRight:"5vw"}}>
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/chat">Chat</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
