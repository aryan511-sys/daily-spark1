import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loader from "./Loader";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page : 1
    };
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2b6a1cf8ee114bce916ad187e77bddd3&category=${this.props.category}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles,
      totalResults : parsedData.totalResults ,
      loading : false
    });
  }

  handlePreviousPages = async() =>{
    console.log("Previous");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2b6a1cf8ee114bce916ad187e77bdd3&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:true})
    console.log(parsedData);
    this.setState({articles : parsedData.articles,page: this.state.page - 1 , loading: false});
  }

  handleNextPages = async() =>{
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize))) {
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2b6a1cf8ee114bce916ad187e77bddd3&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
      this.setState({loading : true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles,page: this.state.page + 1, loading : false});
    }
  }

  render() {
    return (
      <div className="container news-headline">
        <h1 className="text-center">Today's Head Lines</h1>
        {this.state.loading && <Loader />}
        <div className="row my-3">
          {!this.state.loading && this.state.articles.map(
            (element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title? element.title.slice(0,55) : ""} description={element.description ? element.description.slice(0 ,70) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between my-4">
        <button type="button" disabled={this.state.page <= 1} class="btn btn-outline-dark" onClick={this.handlePreviousPages}>&larr; Previous</button>
        <button type="button" class="btn btn-outline-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.page)} onClick={this.handleNextPages}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
