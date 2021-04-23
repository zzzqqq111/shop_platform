import React, { useEffect, useState } from "react";
import ShopTopDetail from "./detail";
import { getProductDetailInfo } from "@redux/actions/actionCreator";
import { useDispatch } from "react-redux";
import { SearchNav } from "@components";
import "./index.less";

const ShopDetail = React.memo((props) => {
  const dispatch = useDispatch();
  const {
    location: { pathname },
  } = props;
  let id = pathname.split("/")[2];
  useEffect(() => {
    dispatch(getProductDetailInfo({ id }));
  }, []);
  return (
    <>
      <SearchNav showTitle={false}/>
      <div style={{ width: "100%", background: "#fff", paddingTop: "24px" }}>
        <div className={"contentBox"}>
          <ShopTopDetail />
        </div>
      </div>
    </>
  );
});
export default ShopDetail;
