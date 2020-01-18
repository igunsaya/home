import React from "react"
import { Grid } from "grommet";

import Main from "../components/Main"
import ProjectCard from "../components/ProjectCard";
import SEO from "../components/SEO"

const IndexPage = () => (
  <Main>
    <SEO title="Ismail Gunsaya" />
    <h1>Hi people</h1>
    <p>Just Created the Gatsby Site. Need to fill it in</p>
    <Grid columns={{ count: "fit", size: "medium" }} gap="small">
      <ProjectCard title="Project 1" />
      <ProjectCard title="Project 2" />
      <ProjectCard title="Project 3" />
    </Grid>
  </Main>
)

export default IndexPage
