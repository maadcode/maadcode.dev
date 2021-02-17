import React from "react"
import Image from "gatsby-image"
import Title from "./Title"
import { Link } from "gatsby"

export const About = ({about}) => {
  const {info, info2, title, image} = about[0]
  const fluid = image.childImageSharp.fluid

  return (
    <section className="section bg-grey" id="about">
      <Title title={title} />
      <div className="about-container">
        <Image fluid={fluid} />
        <div className="about-text">
          <p className="presentation">Permíteme presentarme.</p>
          <p>{info}</p>
          <p>{info2}</p> 
          <Link to="/portfolio" className="btn">Ver proyectos</Link>
        </div>
      </div>
    </section>
  )
}

export default About
