import React from "react"
import { FaBeer } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello From Menu</h1>
  </Layout>
)

export default MenuPage
