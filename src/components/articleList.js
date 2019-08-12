import React from 'react';
import ArticleCard from './articleCard';
import axios from 'axios';
import './articleList.css';

export default class ArticleList extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    axios.get('http://192.168.1.220:4000/v1/articles').then((response) => {
      const articles = response.data;
      this.setState({
        articles
      })
    })
  }
  render() {
    return <div>
      <div className="headerEmpty"></div>
      <div className="articleWrap">
        {this.state.articles.map((article, index) => {
          return <ArticleCard article={article} key={index} />
        })}
      </div>
    </div>;
  }
}
