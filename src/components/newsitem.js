import React, { Component } from 'react';
class NewsItem extends React.Component {
  render() {
    return (
      <div className="card">
    <img className="card-img-top" src={this.props.urlToImage} alt="No image provided"/>
    <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <h4 className="card-title-author">{this.props.author}</h4>
      <p className="card-text">{this.props.description}</p>
      <a href={this.props.url} className="badge badge-primary">Click for more</a>
    </div>
    </div>
    );
  }
}

export default NewsItem;
