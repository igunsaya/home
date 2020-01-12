import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Ismail Gunsaya" />
    <h1>Hi people</h1>
    <p>Just Created the Gatsby Site. Need to fill it in</p>
    <Link to="/projects/">Go to Projects</Link>
  </Layout>
)

export default IndexPage
