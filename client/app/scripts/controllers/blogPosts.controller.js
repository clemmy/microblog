'use strict';

angular.module('clientApp')
  .controller('BlogPostsCtrl', ['$stateParams', '$scope', 'posts', function ($stateParams, $scope, posts) {



    this.blogName = $stateParams.blogName;
    $scope.posts = posts.posts;

    this.newPost = {};
    this.createPost = function() {
      this.newPost.lastEdited = new Date();
      posts.create(this.newPost, this.blogName);
      this.newPost = {}; //resets
    };

    this.removePost = function(postId) {
      posts.removePostFromIdAndBlogName(postId, this.blogName);
    }

    $scope.onFileSelect = function(data) {
      console.log(data);
    }

  }]);


