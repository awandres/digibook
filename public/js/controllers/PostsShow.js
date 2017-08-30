module('digibook')
.controller('PostsShow', [
  '$stateParams',
  'PostFactory',
  PostsShowFn
])

function PostsShowFn($stateParams, PostFactory) {
  this.post = PostFactory.get({id: $stateParams.id})
  console.log(this.post)
}
