import React from "react";
import styled from "styled-components";
import Seo from "../components/seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/app.scss";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import Blogs from "../components/Blogs";
const Container = styled.div`
  background: #fff;
  .fixed {
    position: fixed;
    bottom: 0;
    z-index: -1;
    width: 100%;
  }
`;

const IndexPage = () => {
  return (
    <Container>
      <Seo title="home" />
      <Header />
      <Hero />
      <Cards />
      <Blogs />
      <Brands />
      <div className="fixed">
        <Contact />
        <Footer />
      </div>
    </Container>
  );
};
export default IndexPage;
