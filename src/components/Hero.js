import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
{
  file(relativePath: {eq: "photo.png"}) {
    childImageSharp {
      fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: {
        fluid
      }
    }
  } = useStaticQuery(query)

  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <h1>Hola! Soy <span>Manuel Dávila</span>.</h1>
          <h4>Desarrollador Frontend</h4>
          <Link to="/contact" className="btn">Contáctame</Link>
          <Link to="/about" className="btn">Acerca de mí</Link>
          <SocialLinks />
        </div>
      </article>
      <Image fluid={fluid} className="hero-img" />
    </div>
  </header>
}

export default Hero
