import React from "react";
import Cart from "../image/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions/action";

const Cartbar = (props) => {
  const foods = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClicked = (index, id, param) => {
    if (param === 0) {
      dispatch(increment(index, id));
    } else {
      dispatch(decrement(index, id));
    }
  };
  const dish = foods.map((food) => food.products);
  const dishevent = dish.map((dish1) => {
    for (var i = 0; i < dish1.length; i++)
      if (dish1[i].clicks !== 0) return "true";
  });
  const result = dishevent.includes("true");
  var total = 0;
  var ListItem = foods.map((food) => {
    return (
      <div key={"food" + food.id}>
        {food.products.map((dish) => {
          if (dish.clicks !== 0) {
            return (
              <div className="" key={"food" + food.id + ":" + dish.id}>
                <div className="Sallery-Good-out">
                  <div className="dishname">
                    <h4>{dish.name}</h4>
                  </div>
                  <div className="salleryname" id="buttonstyle-sallery">
                    <div className="linkTag">
                      <div
                        className="ButtonTag-Total"
                        onClick={(e) => handleClicked(food.id, dish.id, -1)}
                        key={dish.id}
                      >
                        <svg
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          className="button-minus_svg__sc-gfqlmq button-minus_svg__fybOtW"
                          style={{ color: "white" }}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 11h14v2H5z"></path>
                        </svg>
                      </div>
                      <div className="Space"></div>
                      <div>
                        <div className="Value1">{dish.clicks}</div>
                      </div>
                      <div className="Space"></div>
                      <div
                        className="ButtonTag-Total"
                        onClick={(e) => handleClicked(food.id, dish.id, 0)}
                        key={food.id + "+" + dish.id}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="button-plus_svg__sc-ckRYGt button-plus_svg__fGBgDy"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="rightsallery">
                    <h4>
                      {(
                        Number(dish.sallery.substring(0, 4)) * dish.clicks
                      ).toFixed(2)} €</h4>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  });
  foods.map((food) => {
    food.products.map((dish) => {
      if (dish.clicks !== 0) {
        total += dish.clicks * Number(dish.sallery.substring(0, 4)).toFixed(2);
      }
    });
  });
  return (
    <div className="sallery">
      <div className="sallery1">
        <h3 className="youcart">Your Cart</h3>
        {result !== true ? (
          <div className="overflow-y">
            <img src={Cart} alt="empty cart" className="cart"></img>
            <p id="order">
              Please select at least one product to place an order
            </p>
          </div>
        ) : (
          <div>
            {ListItem}
            <div className="Total">
              <div className="Total-start">
                <h2>Total</h2>
              </div>
              <div className="Total-end">
                <h3>{total.toFixed(2)} €</h3>
              </div>
            </div>
            <p className="checkout">Checkout</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cartbar;
