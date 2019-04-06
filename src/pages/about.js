import React from "react"
import { FaBeer } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello From About</h1>
  </Layout>
)

export default AboutPage
