angular
  .module('digibook')
  .controller('PostEdit', [
    '$state',
    '$stateParams',
    'PostFactory',
    PostEditFn
  ])

  function PostEditFn ($state, $stateParams, PostFactory) {
    this.post = PostFactory.get({ id: $stateParams.id })
    this.updatePost = function () {
      this.post.$update({ id: $stateParams.id })
        .then((res) => {
          $state.go('postsShow', { id: res._id }, { reload: true })
        })
    }
    this.destroyPost = function () {
      this.post.$delete({ id: $stateParams.id })
        .then((res) => {
          $state.go('postsIndex')
        })
    }
  }
