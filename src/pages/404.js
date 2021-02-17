import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>404</h1>
          <p>Ops! La página que buscas no existe</p>
          <Link to="/" className="btn">Página principal</Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
