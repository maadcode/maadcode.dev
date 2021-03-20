import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Blog = ({id, title, image, category, slug, desc}) => {
  return (
    <article className="article">
      <div className="article__image">
        {
          image && (<Img fluid={image.childImageSharp.fluid} className="article__image--img" />)
        }
      </div> 
      <div className="article__info">
        <span className="article__info--category">{category}</span>
        <h3 className="article__info--title">{title}</h3>
        <p className="article__info--description">{desc}</p>
        <Link to={`/articulos/${slug}`} key={id} className="btn btn-article">Leer más</Link>
      </div>
    </article>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Blog
