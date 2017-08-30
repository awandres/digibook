angular.module('digibook')
.factory('PostFactory', [
  '$resource',
  PostFactory
])

function PostFactory($resource) {
  return $resource('/api/posts/:id', null, {
    update: {method: 'PUT'}
  })
}
