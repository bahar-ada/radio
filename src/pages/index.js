import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RadioVideo from '../components/RadioVideo';
import TodayEpisode from '../components/TodayEpisode';
import Episodes from '../components/Episodes';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <RadioVideo />
    <TodayEpisode />
    <Episodes />


  </Layout>
)

export default IndexPage
