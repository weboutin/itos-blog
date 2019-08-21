const fs = require('fs');
const path = require('path');

const articleDir = path.join(__dirname, "./articles");

class Article {

  save(article) {
    const articleId = new Date().getTime().toString();
    fs.writeFileSync(
      path.join(articleDir, articleId),
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
