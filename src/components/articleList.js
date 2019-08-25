import React from 'react';
import ArticleCard from './articleCard';
import axios from 'axios';
import './articleList.css';

const serverHost = process.env.REACT_APP_SERVER_HOST

export default class ArticleList extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    axios.get(`${serverHost}/articles`).then((response) => {
      const articles = response.data;
      this.setState({
        articles
      })
    })
  }
  render() {
    return <div>
      <div className="articleWrap">
        {this.state.articles.map((article, index) => {
          return <ArticleCard article={article} key={index} />
        })}
      </div>
    </div>;
  }
}
