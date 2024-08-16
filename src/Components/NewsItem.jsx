import React from "react";

const NewsItems = (props) => {

    let {title , description ,imageUrl ,newsUrl} = props
    return (
        <div className="my-3">
        <div className="card image-div">
            <img className="news-image" src={imageUrl ? imageUrl : "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg" } alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}...</h5>
                <p className="card-text">{props.description}...</p>
                <a href={newsUrl} target="_blank" className="btn btn-outline-primary">Read More..</a>
            </div>
        </div>
        
    </div>


    );
  }

  export default NewsItems