import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const ProjectsPage = ({
  data: {
    allStrapiProjects: {
      nodes: projects
    }
  }
}) => {
  return <Layout>
    <SEO title="Portafolio" description="Portafolio Maadcode. En esta página muestro mis proyectos personales con sus tecnologías utilizadas." />
    <section className="projects-page">
      <Projects projects={projects} title="Portafolio" />
    </section>
  </Layout>
}

export const query = graphql`
{
  allStrapiProjects {
    nodes {
      github
      id
      url
      title
      description
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default ProjectsPage
