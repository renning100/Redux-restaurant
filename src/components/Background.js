import BackImage from "../image/home.jpeg";
import { FaAngellist } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Background = () => {
  return (
    <div className="image">
      <span className="image_1">
        <img src={BackImage} alt="background" className="Backimage" />
      </span>
      <div className="text">
        <div className="text1">
          <div className="text2">
            <h1 className="text5">Restaurant Jannat</h1>
            <p className="text6">Indian restaurant in Puchheim</p>
            <div className="button">
              <div className="pick">
                <button className="pickup">
                  <span className="pick1">
                    <FaAngellist />
                  </span>
                  <p className="pick2">PICKUP</p>
                  <span className="pick3">
                    <FaEdit />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
