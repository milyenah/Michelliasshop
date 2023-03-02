import { useState, useRef } from "react";
import "./App.css";
import Categories from "./Categories";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Payment from "./Components/Payment";
import { menu } from "./Components/menu";
import { Context } from "./Context";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Mygallery from "./Components/Mygallery";
import Sales from "./Pages/Sales";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

function App() {
  const [carts, SetCarts] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [count, setCount] = useState(1);
  const [money, setMoney] = useState(1);
  const [total, setTotal] = useState(0);
  const [openPay, setOpenPay] = useState(false);
  const [list, setList] = useState(menu);
  const addCart = (element) => {
    if (carts.includes(element)) {
      return false;
    } else {
      SetCarts([...carts, element]);
    }
  };
  const removeCart = (id) => {
    SetCarts([...carts.filter((item) => item.id !== id)]);
  };
  const loaderRef = useRef();
  const filterCategories = (item, e) => {
    e.preventDefault();
    const effect = menu.filter((current) => {
      return current.category === item;
    });
    setList(effect);
  };

  const elements = {
    carts,
    SetCarts,
    addCart,
    removeCart,
    openCart,
    setOpenCart,
    setCount,
    setMoney,
    total,
    setTotal,
    openPay,
    setOpenPay,
    filterCategories,
    list,
    setList,
    loaderRef,
  };

  return (
    <Context.Provider value={elements}>
      <div className="App">
        <Header />
        <Mygallery />
        <Routes>
          <Route path="/shop" element={<Categories />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/sales" element={<Sales />}></Route>
        </Routes>
        <Cart />
        <Payment />
        <Footer />
        <a href="#header"><BsFillArrowUpSquareFill className="toTop"/></a>
      </div>
    </Context.Provider>
  );
}

export default App;
