import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date , source} = this.props;
    return (
      <div className="my-3">
        <div className="card image-div">
          <img
            className="news-image"
            src={
              imageUrl
                ? imageUrl
                : "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
            }
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              <small>
              <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark">
               {source}
              </span>
              </small>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknow" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              Read More..
            </a>
          </div>
        </div>
      </div>
    );
  }
}
