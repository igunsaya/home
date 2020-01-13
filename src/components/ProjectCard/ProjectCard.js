import React from "react"
import PropTypes from "prop-types"
import { Box } from "grommet"


const ProjectCard = ({ gridArea, title }) => (
  <Box gridArea={gridArea} background="light-1">
    <p>{title}</p>
  </Box>
)

ProjectCard.propTypes = {
  title: PropTypes.string,
}

export default ProjectCard;
