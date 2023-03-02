import { useContext, useState, useEffect } from "react";
import { Context } from "./Context";
import { BsCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import { menu } from "./Components/menu";
import InnerImageZoom from 'zoom-loading-detector';
export default function Categories() {
  const $ = useContext(Context);
  return (
    <div className="products">
      <h2>Products</h2>
      <div className="shop-dropdown">
        <li
          onClick={(e) => {
            e.preventDefault();
            $.setList(menu);
          }}
        >
          <a href="#prod">All</a>
        </li>
        <li onClick={(e) => $.filterCategories("Heatphones", e)}>
          <a href="#prod">Headphones</a>
        </li>
        <li onClick={(e) => $.filterCategories("Cases", e)}>
          <a href="#prod">Cases</a>
        </li>
        <li onClick={(e) => $.filterCategories("Laptop", e)}>
          <a href="#prod">Laptop</a>
        </li>
        <li onClick={(e) => $.filterCategories("Monitor", e)}>
          <a href="#prod">Monitor</a>
        </li>
        <li onClick={(e) => $.filterCategories("Notebook", e)}>
          <a href="#prod">Notebook</a>
        </li>
        <li onClick={(e) => $.filterCategories("Phones", e)}>
          <a href="#prod">Phones</a>
        </li>
        <li onClick={(e) => $.filterCategories("PowerBanks", e)}>
          <a href="#prod">Powerbanks</a>
        </li>
        <li onClick={(e) => $.filterCategories("Processors", e)}>
          <a href="#prod">Processors</a>
        </li>
        <li onClick={(e) => $.filterCategories("Videos", e)}>
          <a href="#prod">Video Carts</a>
        </li>
        <li onClick={(e) => $.filterCategories("Watches", e)}>
          <a href="#prod">Watches</a>
        </li>
      </div>
      <div className="products-container">
        <div className="products-menu" id="prod">
          {$.list.map((item) => {
            return (
              <div className="products-item" key={item.id}>
                <InnerImageZoom src={item.picture} zoomSrc={item.picture} />
                <h2>Brandname : {item.name}</h2>
                <h3>{item.made}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat id sint repudiandae aspernatur illo delectus!
                </p>
                <div className="star-cont">
                  <span
                    style={{ textDecoration: "line-through", color: "red" }}
                  >
                    {item.price + 46}$
                  </span>
                  <span>{item.price}$</span>
                  <div className="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div
                      className="star"
                      style={{
                        background: item.price < 20 ? "gray" : "darkorange",
                      }}
                    ></div>
                    <div
                      className="star"
                      style={{
                        background: item.price < 50 ? "gray" : "darkorange",
                      }}
                    ></div>
                    <div
                      className="star"
                      style={{
                        background: item.price < 100 ? "gray" : "darkorange",
                      }}
                    ></div>
                  </div>
                 
                </div>
                <button
                  className="butt"
                  onClick={(e) => {
                    $.addCart(item);
                    if ($.carts.includes(item)) {
                      return false
                    } else {
                      $.setTotal($.total + item.data);
                    }
                  }}
                >
                  {$.carts.includes(item) ? (
                    <BsFillCartCheckFill style={{ color: "forestgreen" }} />
                  ) : (
                    <BsCartPlusFill style={{ color: "black" }} />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
