import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/navbar/Navbar";
import Cart from "./components/pages/cart/Cart";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/" />
        </Routes>
      </BrowserRouter>
      {/* <ItemListContainer /> */}
      {/* <ItemDetailContainer /> */}
      {/* <Cart /> */}
    </>
  );
}

export default App;
