import NavBar from "../NavBar"
import Hero from "../Hero"
import Service from "../Service"
import Featured from "../Featured"
import Offer from "../Offer"
import New from "../New"
import Inspired from "../Inspired"
import Blog from "../Blog"
import Footer from "../Footer"
const Home = () => {
  return (
    <>
       <NavBar />
       <Hero />
    <div className="container mx-auto">
       <Service />
      <Featured />
      </div>
      <Offer />
       <div className="container mx-auto">
      <New />
      <Inspired  />
      <Blog />
    </div>
      <Footer /> 
     
    </>
  )
}

export default Home
