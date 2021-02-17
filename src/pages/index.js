import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
import About from "../components/About"

export default ({data}) => {
  const {
    allStrapiProjects: {
      nodes: projects
    },
    allStrapiBlogs: {
      nodes: blogs
    },
    allStrapiAbout: {
      nodes: about
    },
    allStrapiSkills: {
      nodes: skills
    }
  } = data
  
  return (
    <Layout>
      <SEO title="Inicio" description="Hola! Mi nombre es Manuel Dávila y soy Desarrollador Frontend. Este es mi sitio web personal donde muestro mis proyectos y artículos sobre programación." />
      <Hero />
      <About about={about} />
      <Services skills={skills} />
      <Projects projects={projects} title="Proyectos recientes" showLink />
      <Blogs blogs={blogs} title="Últimos artículos" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
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
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiAbout {
      nodes {
        info
        info2
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    },
    allStrapiSkills {
        nodes {
            name
            id
            category
        }
    }
  }
`
