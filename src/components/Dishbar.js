import React from "react";
import {useDispatch,useSelector} from 'react-redux';
import { increment, decrement } from '../redux/actions/action';

const Dishbar = (props) => {
  const foods =useSelector((state)=>state);
  const dispatch=useDispatch();
  const searchItem = props.parentToChild;
  const clickid=props.parentToChildclick;
  const handleClicked = (index, id, param) => {
    if (param === 0) {
      dispatch(increment(index, id));
    } else {
      dispatch(decrement(index, id));
    }
  };   
  return (
    <div className="dishtop">
      {foods.map((food) => (
        <li key={food.id} id={"list" + food.id} className={food.id===clickid ? "anima":"" }>
          <div  className="inputtag"></div>
          <h2 className={searchItem ? "hidden" : ""}>{food.names}</h2>
          {food.products.map((list) => (
            <div
              key={list.id}
              className={
                list.name?.toLocaleLowerCase().includes(searchItem)
                  ? "" 
                  : "hidden"
              }
            >
              <div className="dish1">
                <div className="dish2"></div>
                <div className="dish3">
                  <h4>{list.name}</h4>
                  <h5>{list.title}</h5>
                  <p>{list.sallery}</p>
                </div>
                <span className="spanadd">
                  <div className="ADD">
                    <div className="ADD1">
                      <div
                        className="ButtonTag"
                        onClick={(e) =>handleClicked(food.id, list.id, -1)}
                        key={list.id}
                      >
                        <svg
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          className="button-minus_svg__sc-gfqlmq button-minus_svg__fybOtW"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 11h14v2H5z"></path>
                        </svg>
                      </div>
                      <div className="Space"></div>
                      <div>
                        {list.clicks === 0 ? (
                          <div
                            className="Value"
                            onClick={(e) => handleClicked(food.id, list.id, 0)}
                            key={list.id}
                          >
                            Add
                          </div>
                        ) : (
                          <div className="Value1">{list.clicks}</div>
                        )}
                      </div>
                      <div className="Space"></div>
                      <div
                        className="ButtonTag"
                        onClick={(e) => handleClicked(food.id, list.id, 0)}
                        key={food.id + "+" + list.id}
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
                </span>
              </div>
            </div>
          ))}
        </li>
      ))}
    </div>
  );
};


export default Dishbar;
