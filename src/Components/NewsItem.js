import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div>
        <div className="card" style={{width:" 18rem"}}>
  <img src={!imageUrl?"https://w0.peakpx.com/wallpaper/666/961/HD-wallpaper-anime-jujutsu-kaisen-satoru-gojo.jpg":imageUrl}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}  </h5>
    <p className="card-text">{description}...</p>
    <p className='card-text'><small className="text-muted">By {author?author:"Unknown"} on {new Date (date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark ">Read More</a>
  </div>
</div>  
      </div>
    )
  }
}

export default NewsItem
