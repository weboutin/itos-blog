const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const Model = require('./model');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const port = 4000

app.post('/article', (req, res) => {
  const article = req.body.article;
  Model.save(article);
  res.status('201').end();
})

app.get('/article/:articleId', (req, res) => {
  const articleId = req.params.articleId;
  const article = Model.getById(articleId);
  res.status(200).json(article)
})

app.get('/articles', (req, res) => {
  const articles = Model.all()
  res.status(200).json(articles);
})

app.put('/article/:articleId', (req, res) => {
  const article = req.body;
  Model.save(article);
  res.status(200).save(article);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
