/**
 * Main component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "../../css/main.scss"

const Main = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container is-fluid">
      <div>
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">{data.site.siteMetadata.title}</h1>
            </div>
          </div>
        </section>
        <div>
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
