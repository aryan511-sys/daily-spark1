import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import "./App.css";
import PropTypes from "prop-types";
import AboutUs from "./Components/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  static defaultProps = {
    pageSize: 6,
    country: "in",
    category: "sports",
  };

  static propTypes = {
    pageSize: PropTypes.string,
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
  render() {
    const { isDarkMode } = this.state;
    const themeClass = isDarkMode ? "dark-mode" : "light-mode";
    return (
      <div>
        <Router>
          <div className={`app ${themeClass}`}>
            <NavBar toggleMode={this.toggleDarkMode} />

            <Routes>
              <Route
                path="/"
                element={
                  <News
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
                    key="technoligy"
                    pageSize={6}
                    country={"in"}
                    category={"technology"}
                  />
                }
              ></Route>
              <Route path="/comingsoon" element={<AboutUs />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
