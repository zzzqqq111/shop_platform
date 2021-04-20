import React, { Fragment } from "react";
import Home from "./pages/home";
import { ConfigProvider, Layout } from "antd";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { HeaderBox, FooterBox } from "./components";
const { Content } = Layout;

const App = () => {
  return (
    <Fragment>
      <Layout>
        <HeaderBox />
        <Content style={{paddingBottom: '50px',background: '#f7f7f7'}}>
          <HashRouter>
            <Switch>
              <Route path="/home" component={Home} />
              <Route exact path="/" component={Home} />
              <Redirect to={"/"} />
            </Switch>
          </HashRouter>
        </Content>
        <FooterBox />
      </Layout>
    </Fragment>
  );
};

export default App;
