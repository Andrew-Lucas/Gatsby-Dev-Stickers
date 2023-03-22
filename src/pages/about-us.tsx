import * as React from "react"
import HeadComponent from '../components/HeadComponent'
import Layout from '../components/Layout'

export default function AboutUs() {
  return (
    <Layout pageTitle="About Us">
      <div>
        <p>We make a better way</p>
      </div>
    </Layout>
  )
}

export const Head = () => <HeadComponent title="About Us" />
