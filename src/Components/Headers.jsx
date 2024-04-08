import React from 'react'
import { Link } from 'react-router-dom'

const Headers = () => {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item"><Link to="/" className="nav-link active" onclick="" aria-current="page">Home</Link></li>
          <li className="nav-item"><Link to="/feature" className="nav-link">Feature</Link></li>
          <li className="nav-item"><Link to="/feature" className="nav-link">Pricing</Link></li>
          <li className="nav-item"><Link to="/feature" className="nav-link">FAQs</Link></li>
          <li className="nav-item"><Link to="/feature" className="nav-link">About</Link></li>
        </ul>
      </header>
    </div>
  )
}

export default Headers
