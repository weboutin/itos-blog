const fs = require('fs');
const path = require('path');

class Article {

  save(article) {
    const articleId = new Date().getTime();
    fs.writeFileSync(
      path.join(this.articleDir, articleId),
      JSON.stringify(article)
    );
  }

  getById(articleId) {
    return JSON.stringify(fs.readFileSync(
      path.join(this.articleDir, articleId)
    ))
  }
}

module.exports =  new Article();
