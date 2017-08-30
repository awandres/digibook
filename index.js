const express = require('express')
const parser = require('body-parser')

const Post = require('./db/schema.js')

const app = express()

app.set('port', process.env.PORT || 3001)
app.use('/assets', express.static('public'))
app.use('/node_modules', express.static('node_modules'))
app.use(parser.json({extended: true}))

app.get('/api/posts', (req, res) => {
  Post.find({}, null).then((posts) => {
    res.json(posts)
  })
})

app.post('/api/posts', (req, res) => {
  Post.create(req.body).then((post) => {
    res.status(200).json(post)
  })
})

app.get('/api/posts/:id', (req, res) => {
  Post.findOne({ _id: req.params.id }).then((post) => {
    res.json(post)
  })
})

app.put('/api/posts/:id', (req, res) => {
  Post.findOneAndUpdate({ _id: req.params.id}, req.body, {new:true}).then((post) => {
    res.status(200).json(post)
  })
})

app.delete('/api/posts/:id', (req, res) => {
  Post.findOneAndRemove({ _id: req.params.id}).then(() => {
    res.status(200).send('post deleted')
  })
})

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
