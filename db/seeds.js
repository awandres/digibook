const postData = require('./seeds.json')
const Post = require('./schema.js')

Post.remove({}).then(function(){
  postData.forEach(function(post) {
    Post.create({
      date: post.date,
      content: post.content
    })
      .then((newPost) => {
        console.log(newPost)
      })
      .catch((err) => {
        console.log(err)
      })
  })
})
