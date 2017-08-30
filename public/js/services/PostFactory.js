.module('digibook')
.factory('PostFactory', [
  '$resource',
  PostFactory
])

function PostFactory($resource) {
  return $resource('/posts/:id', null, {
    update: {method: 'PUT'}
  })
}
