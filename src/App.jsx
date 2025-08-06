import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home";
import Category from "./pages/Category";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="shop" element={<Category />}></Route>
      </Route>

    </Routes>
    
    
    
    </BrowserRouter>
    </>
  );
}

export default App;
