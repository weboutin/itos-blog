
import React from 'react';
import { Link } from "react-router-dom";
import './articleCard.css';

export default class ArticleCard extends React.Component {
  render() {
    return <Link className="article" to={{
      pathname: `/article/${this.props.article.id}`,
    }}>
      <div className="article-title">{this.props.article.title}</div>
      <div className="aritcle-summary">{this.props.article.summary}</div>
    </Link>;
  }
}
