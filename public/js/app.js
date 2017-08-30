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
    .state('postsNew', {
      url: '/posts/new',
      controller: 'PostsNew',
      controllerAs: 'vm',
      templateUrl: 'assets/js/views/postsNew.html'
    })
    .state('postsEdit', {
      url: '/edit',
      controller: 'PostsEdit',
      controllerAs: 'vm',
      templateUrl: 'assets/js/views/postsEdit.html'
    })
  $urlRouterProvider.otherwise('/posts')
  $locationProvider.html5mode(true)
}
