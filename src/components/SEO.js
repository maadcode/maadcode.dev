import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        siteDescription
        siteAuthor
        siteImage
        siteUrl
        siteTitle
        siteTwitterUsername
      }
    }
  }
`

const SEO = ({title, description, imageUrl, slug}) => {
  const {site} = useStaticQuery(query)
  const {siteDescription, siteTitle, siteAuthor, siteUrl, siteImage, siteTwitterUsername} = site.siteMetadata
  
  return <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{lang:"es"}}>
    <meta name="description" content={description ? description : siteDescription} />
    <meta name="author" content={siteAuthor} />

    <meta property="og:title" content={`${title} | ${siteTitle}`} />
    <meta property="og:description" content={description ? description : siteDescription} />
    <meta property="og:image" content={imageUrl ? `${siteUrl}${imageUrl}` : `${siteUrl}${siteImage}`} />
    <meta property="og:url" content={slug ? `${siteUrl}/articulos/${slug}` : siteUrl} />

    <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
    <meta name="twitter:description" content={description ? description : siteDescription} />
    <meta name="twitter:image" content={imageUrl ? `${siteUrl}${imageUrl}` : `${siteUrl}${siteImage}`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={siteTwitterUsername} />
  </Helmet>
}

export default SEO
