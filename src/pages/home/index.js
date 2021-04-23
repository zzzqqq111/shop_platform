import React, { Fragment, useEffect } from "react";
import Slider from './slider'
import HotSale from './components/hot'
import ProductBox from './components/product'
import { getUserInfo, getUserProjectData } from "@redux/actions/actionCreator";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { SearchNav } from "@components";
const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    dispatch(getUserInfo())
    dispatch(getUserProjectData())
  }, []);
  const getDetail = id =>{
    history.push({
      pathname: `/detail/${id}`,
    })
  }
  return (
    <Fragment>
      <SearchNav />
      <Slider />
      <HotSale getDetail={getDetail}/>
      <ProductBox getDetail={getDetail}/>
    </Fragment>
  );
}

export default Home;
