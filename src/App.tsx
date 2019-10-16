import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import ArticleList from './components/articleList';
import ArticleDetail from './components/articleDetail';
import ArticleEditor from './components/articleEditor';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Router>
        <Route path="/" exact component={ArticleList} />
        <Route path="/article/:articleId" exact component={ArticleDetail} />
        <Route path="/create" exact component={ArticleEditor} />
      </Router>
      <Footer />
    </div>
  );
}
export default App;
