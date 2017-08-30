console.log('linked')
/* global angular */
angular.module('digibook', [
  'ui.router',
  'ngResource'
])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  Router
])

function Router($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('postsIndex', {
      url: '/posts',
      controller: 'PostsIndex',
      controllerAs: 'vm',
      templateUrl: 'assets/js/views/PostsIndex.html'
    })
    .state('postsShow', {
      url: '/posts/:id',
      controller: 'PostsShow',
      controllerAs: 'vm',
      templateUrl: 'assets/js/views/PostsShow.html'
    })
    .state('postsNew', {
      url: '/posts/new',
      controller: 'PostNew',
      controllerAs: 'vm',
      templateUrl: 'assets/js/views/postsNew.html'
    })
    .state('postsEdit', {
      url: '/edit',
      controller: 'PostEdit',
      controllerAs: 'vm',
      templateUrl: 'assets/js/views/postsEdit.html'
    })
  $urlRouterProvider.otherwise('/posts')
}
