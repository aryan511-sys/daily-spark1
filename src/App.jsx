import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News'
import './App.css'
import PropTypes from 'prop-types'
export default class App extends Component {
  
  static defaultProps = {
    pageSize : 6,
    country : "us",
    category : "sports"
  }

  static propTypes = {
    pageSize : PropTypes.string,
    country : PropTypes.string,
    category : PropTypes.string,
  }

  render() {
    return (
      <div>
        <NavBar />
        <News pageSize = {6} country={"us"} category={"sports"} />
      </div>
    )
  }
}
