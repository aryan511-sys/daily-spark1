import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let {title , description ,imageUrl ,newsUrl} = this.props
    return (
        <div className="my-3">
        <div className="card image-div">
            <img className="news-image" src={imageUrl ? imageUrl : "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg" } alt="..." />
            <div className="card-body">
                <h5 className="card-title">{this.props.title}...</h5>
                <p className="card-text">{this.props.description}...</p>
                <a href={newsUrl} target="_blank" className="btn btn-outline-primary">Read More..</a>
            </div>
        </div>
        
    </div>


    );
  }
}
