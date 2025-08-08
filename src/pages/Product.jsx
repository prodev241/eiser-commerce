import Container from "../Container"
import Footer from "../Footer"
import NavBar from "../NavBar"
import ProductDetail from "../ProductDetail"
import Review from "../Review"

const Product = () => {
  return (
    <>
    <NavBar/>
    <Container>
      <ProductDetail/>
      <Review/>
    </Container>
        <Footer/>
    </>
  )
}

export default Product
