import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import "./App.css";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  static defaultProps = {
    pageSize: 6,
    country: "in",
    category: "sports",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  state = {
    progress : 0
  }

  setProgress = (progress) => {
    this.setState({progress : progress});
  }
  render() {
    const { isDarkMode } = this.state;
    const themeClass = isDarkMode ? "dark-mode" : "light-mode";
    return (
      <div>
        <Router>
          <div className={`app ${themeClass}`}>
            <NavBar toggleMode={this.toggleDarkMode} />
            <LoadingBar
              color='#f11946'
              progress={this.state.progress}
              // onLoaderFinished={() => setProgress(0)}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="general"
                    pageSize={6}
                    country={"in"}
                    category={"general"}
                  />
                }
              ></Route>
              <Route
                path="/business"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="business"
                    pageSize={6}
                    country={"in"}
                    category={"business"}
                  />
                }
              ></Route>
              <Route
                path="/entertainment"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="entertainment"
                    pageSize={6}
                    country={"in"}
                    category={"entertainment"}
                  />
                }
              ></Route>
              <Route
                path="/health"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="helth"
                    pageSize={6}
                    country={"in"}
                    category={"health"}
                  />
                }
              ></Route>
              <Route
                path="/science"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="science"
                    pageSize={6}
                    country={"in"}
                    category={"science"}
                  />
                }
              ></Route>
              <Route
                path="/sports"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="sports"
                    pageSize={6}
                    country={"in"}
                    category={"sports"}
                  />
                }
              ></Route>
              <Route
                path="/technology"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="technoligy"
                    pageSize={6}
                    country={"in"}
                    category={"technology"}
                  />
                }
              ></Route>

            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
