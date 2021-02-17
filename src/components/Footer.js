import React from "react"
import SocialLinks from "../constants/socialLinks"
import { FaCoffee, FaHeart } from "react-icons/fa"

const Footer = () => {
  return <footer className="footer">
    <div>
      <SocialLinks styleClass="footer-links"></SocialLinks>
      <h4>
        Creado con <FaHeart></FaHeart> y <FaCoffee></FaCoffee> por
        <span> Maadcode </span>
        | &copy;{new Date().getFullYear()} todos los derechos reservados
      </h4>
    </div>
  </footer>
}

export default Footer
