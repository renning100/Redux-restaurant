import React, { useState } from "react";
import store from "../redux/store";
import Scrollspy from "react-scrollspy";

const Menubar = (props) => {
  const foods = store.getState();
  const [input, setInput] = useState("");
  const handleclick = (i) => {
    props.childToParentclick(i);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    props.childToParent(e.target.value);
  };
  return (
    <div className="menustyle1">
      <div className="search-box">
        <input
          type="input"
          value={input}
          placeholder="Search Here..."
          className="input-search"
          onChange={handleChange}
        ></input>
      </div>
      <div className="menubar">
        <Scrollspy
          items={[
            "list1",
            "list2",
            "list3",
            "list4",
            "list5",
            "list6",
            "list7",
            "list8",
            "list9",
            "list10",
            "list11",
            "list12",
          ]}
          currentClassName="is-current"
        >
          {foods.map((food) => {
            return (
              <li key={food.id}>
                <a
                  href={"#list" + food.id}
                  onClick={(e) => handleclick(food.id)}
                >
                  {food.names}
                </a>
              </li>
            );
          })}
        </Scrollspy>
      </div>
    </div>
  );
};

export default Menubar;
