const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000

app.use(cors())

app.get('/v1/articles', (req, res) => {
  res.json([{
    id: 1,
    title: 'title1',
    summary: '开开发者指南开发者指南开发者指南开发者指南开发者指南开发者指南开发者指南发者指南',
    content: 'content1'
  }, {
    id: 2,
    title: 'title2',
    summary: 'summary2',
    content: 'content2'
  }])
})

app.get('/v1/article/:articleId', (req, res) => {
  res.json({
    id: 1,
    title: 'title',
    summary: 'summary',
    content: 'content'
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
