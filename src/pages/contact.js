import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return <Layout>
    <SEO title="Contacto" description="Página de contacto de Maadcode." />
    <section className="contact-page">
      <article className="contact-form">
        <h3>Conversemos sobre tu gran idea</h3>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Nombre" className="form-control" />
            <input type="email" placeholder="Correo" className="form-control" />
            <textarea name="message" rows="5" placeholder="Mensaje" className="form-control"></textarea>
          </div>
          <button type="submit" className="submit-btn btn">Enviar</button>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
