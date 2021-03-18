import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Blog = ({id, title, image, category, slug, desc}) => {
  return (
    <Link to={`/articulos/${slug}`} key={id}>
      <article className="blog">
        {
          image && (<Image fluid={image.childImageSharp.fluid} className="blog-img" />)
        }
        <div className="blog-card">
          <h3>{title}</h3>
          <p className="blog-desc">{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
          </div>
        </div>
      </article>
    </Link>
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
