import NavBar from "../NavBar";
import Hero from "../Hero";
import Service from "../Service";
import Featured from "../Featured";
import Offer from "../Offer";
import New from "../New";
import Inspired from "../Inspired";
import Blog from "../Blog";
import Footer from "../Footer";
import Container from "../Container";
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Container>
        <Service />
        <Featured />
      </Container>
      <Offer />
      <Container>
        <New />
        <Inspired />
        <Blog />
      </Container>

      <Footer />
    </>
  );
};

export default Home;
