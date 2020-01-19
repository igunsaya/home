import React from "react"

import Main from "../components/Main"
import ProjectCard from "../components/ProjectCard";
import SEO from "../components/SEO"

const IndexPage = () => (
  <Main>
    <SEO title="Ismail Gunsaya" />
    <h2 className="subtitle">Hi people</h2>
    <p className="content">Just Created the Gatsby Site. Need to fill it in</p>
    <div className="columns is-desktop">
      <ProjectCard title="Project 1" />
      <ProjectCard title="Project 2" />
      <ProjectCard title="Project 3" />
    </div>
  </Main>
)

export default IndexPage
