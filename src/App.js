import React from 'react';
import Header from './components/header';
import ArticleList from './components/articleList';
import ArticleDetail from './components/articleDetail';
import ArticleEditor from './components/articleEditor';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Route path="/" exact component={ArticleList} />
        <Route path="/article/:articleId" exact component={ArticleDetail} />
        <Route path="/create" exact component={ArticleEditor} />
      </Router>
    </div>
  );
}

export default App;
