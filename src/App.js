import React, { Fragment } from "react";
import Home from "./pages/home";
import ShopDetail from "./pages/detail";
import ShoppingCard from "./pages/shopCard";
import OrderApproval from './pages/submitApproval'
import Address from './pages/submitApproval/address'
import { Layout } from "antd";
import { HashRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import { HeaderBox, FooterBox } from "@components";
const { Content } = Layout;

const App = () => {
  return (
    <Fragment>
      <Layout>
        <HashRouter>
          <HeaderBox />
          <Content style={{ background: "#f7f7f7" }}>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/detail" component={ShopDetail} />
            <Route path="/shoppingCard" component={ShoppingCard} />
            <Route path='/orderApprove' component={OrderApproval}/>
            {/* <Redirect to={"/"} /> */}
          </Content>
          <FooterBox />
        </HashRouter>
      </Layout>
    </Fragment>
  );
};

export default App;
