import React, { Component } from "react";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";
// import Loader from "./Loader";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page : 1,
      totalResults : 0,
    };
  }


  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  async updateNews (pageNo) {
    this.props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2b6a1cf8ee114bce916ad187e77bddd3&category=${this.props.category}&pageSize=${this.props.pageSize}ountry=${this.props.country}&apiKey=2b6a1cf8ee114bce916ad187e77bddd3&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${pageNo}`;
    this.setState({loading:true})
    this.props.setProgress(30)
    let data = await fetch(url);
    this.props.setProgress(0)
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles,
      totalResults : parsedData.totalResults ,
      loading : false
    });

    document.title= `Dark Spark - ${this.capitalizeFirstLetter(this.props.category)} `
  }



  async componentDidMount(){
    this.updateNews(this.state.page);
  }

  

  fetchMoreData = async (pageNo) => {
    this.setState({page:this.state.page+1});
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=2b6a1cf8ee114bce916ad187e77bddd3&category=${this.props.category}&pageSize=${this.props.pageSize}ountry=${this.props.country}&apiKey=2b6a1cf8ee114bce916ad187e77bddd3&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${pageNo}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles : parsedData.articles.concat(this.state.articles),
      totalResults : parsedData.totalResults ,
      loading : false
    });

  };

  render() {
    return (
      <div className="container news-headline">
        <h1 className="text-center">Today's Top Headlines about {this.capitalizeFirstLetter(this.props.category)}</h1>
        {/* {this.state.loading && <Loader />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<h4>Loading...</h4>}
          endMessageendMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
            }
        >
         <div className="container">
         <div className="row my-3">
          { this.state.articles.map(
            (element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title? element.title.slice(0,55) : ""} description={element.description ? element.description.slice(0 ,70) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
            );
          })}
        </div>
         </div>
        </InfiniteScroll>
      </div>
    );
  }
}
