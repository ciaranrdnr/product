import { useState, useRef } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import Indicator from "../../components/Indicator";
import IconLike from "../../assets/icon/heart.js";
import imgGame from "../../assets/game-1.png";

const DetailHead = () => {
  const [fill, setFill] = useState(false);
  const [viewImage, setViewImage] = useState(false);
  const sheetRef = useRef();
  function dismissImg() {
    setViewImage(false);
  }
  return (
    <div className="DetailHead">
      <img
        className="Img-detail"
        src={imgGame}
        alt="game"
        onClick={() => setViewImage(true)}
      />
      <BottomSheet
        ref={sheetRef}
        open={viewImage}
        onDismiss={dismissImg}
        snapPoints={({ minHeight, maxHeight }) => [minHeight, maxHeight / 0.6]}
      >
        <button className="Bs-close" onClick={dismissImg}>
          X
        </button>
        <img className="View-img" src={imgGame} alt="game" />
      </BottomSheet>
      <div className="Top">
        <div className="Title">
          <h1>366 Diamonds</h1>
          <button onClick={() => setFill(!fill)}>
            <IconLike fill={fill} />
          </button>
        </div>
        <div className="Brand Grey-text">Apex Legends</div>
      </div>
      <div className="Mid">
        <span className="Price">Rp100.000</span>{" "}
        <span className="Grey-text">per 1 Top Up</span>
      </div>
      <div className="Bottom">
        <Indicator num="50%" fill="Fill-red" />{" "}
        <span className="Sale-price">Rp200.000</span>
      </div>
    </div>
  );
};
export default DetailHead;
