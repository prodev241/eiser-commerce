import { CartTable } from "../CartTable";
import Container from "../Container";
import NavBar from "../NavBar";
const Cart = () => {
  return (
    <>
      <NavBar />
      <Container>
        <CartTable />
      </Container>
    </>
  );
};

export default Cart;
