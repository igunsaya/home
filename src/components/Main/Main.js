/**
 * Main component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Grommet, Header, Heading } from "grommet"

import "./Main.sass"

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

  const theme = {
    global: {
      colors: {
        "light-2": "#f5f5f5",
        text: {
          light: "rgba(0, 0, 0, 0.87)",
        },
      },
      font: {
        family: "Montserrat",
        size: "12px",
        height: "20px",
      },
    },
  }

  return (
    <Grommet theme={theme}>
      <Box direction="column" pad="medium">
        <Header>
        <Heading level={1}>
          {data.site.siteMetadata.title}
          </Heading>
        </Header>
        <Box pad="medium">
          <main>{children}</main>
        </Box>
      </Box>
    </Grommet>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
