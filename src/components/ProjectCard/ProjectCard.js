import React from "react"
import PropTypes from "prop-types"

const ProjectCard = ({ gridArea, title }) => (
  <div className="column">
    <div className="box">
      <p>{title}</p>
    </div>
  </div>
)

ProjectCard.propTypes = {
  title: PropTypes.string,
}

export default ProjectCard
