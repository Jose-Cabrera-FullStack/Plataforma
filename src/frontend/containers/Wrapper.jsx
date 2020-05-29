import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "./Spinner";

export default WrappedComponent => {
  class Wrapper extends Component {
    state = { isLoading: true };

    componentDidMount = () => this.setTimer();

    componentDidUpdate = prevProps => {
      if (this.props.location !== prevProps.location) {
        this.clearTimer();
        this.setState({ isLoading: true }, () => this.setTimer());
      }
    };

    clearTimer = () => clearTimeout(this.timeout);

    timer = () => this.setState({ isLoading: false }, () => this.clearTimer());

    setTimer = () => (this.timeout = setTimeout(this.timer, 2000));

    render = () => (
      <Fragment>
        {this.state.isLoading ? (
          <Spinner />
          ) : (
            <>
            <Header />
              <WrappedComponent {...this.props} />
            <Footer/>
            </>
        )}
      </Fragment>
    );
  }
  return withRouter(Wrapper);
};