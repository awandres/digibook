angular
.module('digibook')
.controller('PostsIndex', [
  'PostFactory',
  IndexControllerFn
])

function IndexControllerFn(PostFactory) {
  console.log('at index')
  this.posts = PostFactory.query()
}
