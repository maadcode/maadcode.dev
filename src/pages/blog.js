import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = ({
  data: {
    allStrapiBlogs: {
      nodes: blogs
    }
  }
}) => {
  return <Layout>
    <SEO title="Blog" description="Blog Maadcode. En esta página muestro la lista de artículos sobre frontend, backend, servidores y otros temas tecnológicos." />
    <section className="banner-blog">
      <h1>Maadcode Blog</h1>
      <p>Experiencias, opiniones y tutoriales sobre programación y desarrollo web</p>
    </section>
    <section className="blog-page">
      <Blogs blogs={blogs} title="Mis artículos" />
    </section>
  </Layout>
}

export const query = graphql`
{
  allStrapiBlogs {
    nodes {
        slug
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
  }
`

export default Blog
