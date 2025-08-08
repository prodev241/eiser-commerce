import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import ContectUs from "./pages/ContectUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/shop" element={<Category />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/contect" element={<ContectUs />}></Route>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
