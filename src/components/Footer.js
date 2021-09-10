import React from 'react'
import { Link } from 'react-router-dom' 

const Footer = () => {
    return (
        <footer>
        <Link to="/services">Fotografie de eveniment</Link>
        <Link to="/services">Sedinte foto personalizate</Link>
        <Link to="/services">Fotografie de produs</Link>
        <Link to="/despre">Despre noi</Link>
        <Link to="/contact">Contact</Link>
        <div className="socialM">
          <Link to=""><i className="fab fa-facebook-square"></i></Link>
          <Link to=""><i className="fab fa-instagram"></i></Link>
          <Link to=""><i className="fas fa-phone-square-alt"></i></Link>
          <Link to=""><i className="fab fa-facebook-messenger"></i></Link>
        </div>  
        </footer>
    )
}

export default Footer
