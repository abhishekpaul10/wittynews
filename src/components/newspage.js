import React, { Component } from 'react';
import NewsItem from './newsitem';
const myUrl='https://newsapi.org/v2/top-headlines?country=us&apiKey=57bad5f9c2134812a7a5dba05358dbde';
class NewsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {news:[]};
    }

    componentDidMount() {
        fetch(myUrl, {
            method: 'get'
        }).then((res)=> {
            if(res.status === 200) {
                res.json().then((data) => {
                    console.log(data);
                    this.setState({news:data.articles});
                }).catch((err) => {
                    console.log(err);
                });
            }
        }).catch(function(err) {
            console.log(err);
        });
    }

  render() {
    let newsArray = this.state.news.map(Item =>
        {return <NewsItem key={Item.newsUrl} url={Item.url} urlToImage={Item.urlToImage} title={Item.title} author={Item.author} description={Item.description}/>}
    )
    return (
            <div class="mainBody">
             <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">WittyNews</a>
                </div>
            </nav>
            
            <div class="grid-container">    
            {newsArray}
            </div>
            </div>
      
            

    );
  }
}

export default NewsPage;
