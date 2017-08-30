angular
.module('digibook', [
  'uiRouter',
  'ngResources'
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
      templateUrl: 'assets/js/views/postsIndex.html'
    })
    .state('postsShow', {
      url: '/posts/:id',
      controller: 'PostsShow',
      controllerAs: 'vm',
      templateUrl: 'assets/js/views/postsShow.html'
    })
  $urlRouterProvider.otherwise('/posts')
  $locationProvider.html5mode(true)
}
