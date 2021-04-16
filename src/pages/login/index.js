import React, { Component } from "react";
// import { connect } from 'react-redux'

class Login extends Component {
  gotoHome() {
    this.props.history.push("/home");
  }
  render() {
    return (
      <div>
        <h1>Login page</h1>
        <button onClick={this.gotoHome.bind(this)}>跳转Home页</button>
      </div>
    );
  }
}

export default Login;
