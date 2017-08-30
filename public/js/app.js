console.log('linked')

angular.module('digibook', [
  'ui.router',
  'ngResource'
])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  Router
])

function Router($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('postsIndex', {
      url: '/posts',
      controller: 'PostsIndex',
      controllerAs: 'vm',
      templateUrl: 'public/js/views/PostsIndex.html'
    })
    .state('postsShow', {
      url: '/posts/:id',
      controller: 'PostsShow',
      controllerAs: 'vm',
      templateUrl: 'public/js/views/PostsShow.html'
    })
  $urlRouterProvider.otherwise('/posts')
  $locationProvider.html5mode(true)
}
