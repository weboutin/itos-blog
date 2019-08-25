const fs = require('fs');
const path = require('path');
const articleDirName = path.join(__dirname, "./articles");

class Article {
  constructor() {
    if (!fs.existsSync(articleDirName)) {
      fs.mkdirSync(articleDirName);
    }
  }

  update(article) {
    const articleId = article.articleId;
    fs.writeFileSync(
      path.join(articleDirName, articleId),
      JSON.stringify(article)
    );
  }

  save(article) {
    const articleId = new Date().getTime().toString();
    article.articleId = articleId;
    fs.writeFileSync(
      path.join(articleDirName, articleId),
      JSON.stringify(article)
    );
  }

  getById(articleId) {
    return JSON.parse(fs.readFileSync(
      path.join(articleDirName, articleId),
      'utf8'
    ))
  }

  all() {
    return fs.readdirSync(articleDirName).sort((a, b) => {
      return b - a
    }).map((articleId) => {
      return this.getById(articleId)
    })
  }
}

module.exports = new Article();
