angular
  .module('digibook')
  .controller('PostNew', [
    '$state',
    'PostFactory',
    PostNewFn
  ])

  function PostNewFn ($state, PostFactory) {
    this.post = new PostFactory()
    this.createPost = function () {
      this.post.$save().then((res) => {
        $state.go('postsShow', { id: res._id })
      })
    }
  }
