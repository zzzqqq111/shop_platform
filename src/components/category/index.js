import classnames from "classnames";
import React, { useEffect, useState } from "react";
import "./index.less";
import { getCategoryData } from "@redux/actions/actionCreator";
import { useSelector, useDispatch } from "react-redux";

const LeftBox = ({ onClick }) => {
  const { categoryFirstList, categoryThreeList } = useSelector(
    (state) => state.shop
  );
  const onMouseOver = (index) => {
    onClick(index);
  };
  return categoryFirstList.map((cate = {}, index) => {
    let children =
      categoryThreeList[index].length > 0 ? categoryThreeList[index] : [];
    return (
      <div
        className="menuItem"
        onMouseEnter={() => {
          onMouseOver(index);
        }}
        onMouseLeave={() => {
          onMouseOver(-1);
        }}
        key={cate.id}
      >
        <p>{cate.name}</p>
        <div className="little">
          {children.map((ite) => {
            return <p className="name" key={ite.id}>{ite.name}</p>;
          })}
        </div>
      </div>
    );
  });
};
const RightBox = ({ index }) => {
  const { categorySecondList } = useSelector((state) => state.shop);
  let data = categorySecondList[index] || [];
  const content = data.map((ite) => {
    let children = ite.childrenCategory || []
    return (
      <div className='rightBoxItem'>
        <p>{ite.name}</p>
        <div className="little">
          {children.map((product) => (
            <span>{product.name}</span>
          ))}
        </div>
      </div>
    );
  });
  return <div className="rightBox">{content}</div>;
};

const Category = React.memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryData());
  }, []);
  const [box, setBoxShow] = useState({ id: 0, show: false });
  const changeId = (id) => {
    if (id === -1) {
      setBoxShow({ id: 0, show: false });
    } else {
      setBoxShow({ id, show: true });
    }
  };
  return (
    <div className="categoryBox" style={{ background: "#000" }}>
      <LeftBox onClick={changeId} />
      {box.show && <RightBox index={box.id} />}
    </div>
  );
});
export default Category;
