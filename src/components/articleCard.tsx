import React from 'react';
import './articleCard.css';
import { Article } from '../types/Article'

type Props = {
  article: Article
}

/**
 * 文章列表页卡片
 */
export default class ArticleCard extends React.Component<Props> {
  render() {
    return <>
      <a
        className="article"
        href={this.props.article.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="article-title">{this.props.article.title}</div>
        <div className="aritcle-summary">{this.props.article.summary}</div>
      </a>
    </>;
  }
}
