
import React from 'react';
import './articleCard.css';

export default class ArticleCard extends React.Component {
  render() {
    return <a className="article" href={this.props.article.link} target="_blank" rel="noopener noreferrer">
      <div className="article-title">{this.props.article.title}</div>
      <div className="aritcle-summary">{this.props.article.summary}</div>
    </a>;
  }
}
