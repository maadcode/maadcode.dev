import React from "react"
import Title from "./Title"
import services from "../constants/services"

const Services = ({skills}) => {
  return <section className="section">
    <Title title="Mis habilidades" />
    <div className="section-center services-center">
      {
        services.map(service => {
          const {id, icon, title} = service
          return <article key={id} className="service">
            {icon}
            <h4>{title}</h4>
            <div className="underline"></div>
            <div className="stack-container">
              {skills.map((skill) => {
                if(skill.category === title) {
                  return <span key={skill.id}>{skill.name}</span>
                }
              })}
            </div>
          </article>
        })
      }
    </div>
  </section>
}

export default Services
