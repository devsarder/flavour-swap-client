import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Banner from "./Banner";
import Foods from "./Foods";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <Banner></Banner>
      <Foods></Foods>
      <Footer></Footer>
    </div>
  );
};

export default Home;
