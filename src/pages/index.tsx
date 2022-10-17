import type { NextPage } from "next";
import AboutCompany from "../components/AboutCompany";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Products />
      <AboutCompany />
      <Footer />
    </>
  );
};

export default Home;
