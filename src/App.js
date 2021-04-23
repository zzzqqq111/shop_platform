import React, { Fragment } from "react";
import Home from "./pages/home";
import ShopDetail from "./pages/detail";
import ShoppingCard from "./pages/shopCard"
import { ConfigProvider, Layout } from "antd";
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import { HeaderBox, FooterBox, SearchNav } from "@components";
const { Content } = Layout;

const App = () => {
  const history = useHistory();
  return (
    <Fragment>
      <Layout>
        <HashRouter>
          <HeaderBox />
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/detail" component={ShopDetail} />
            <Route path="/shoppingCard" component={ShoppingCard} />
            <Redirect to={"/"} />
          </Switch>
        </HashRouter>
        <Content style={{ background: "#f7f7f7" }}></Content>
        <FooterBox />
      </Layout>
    </Fragment>
  );
};

export default App;
