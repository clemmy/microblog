'use strict';

angular.module('clientApp')
  .controller('MainCtrl', function ($rootScope) {

    var post = {
      content : 'blah blah blah I am a test post.'
    };

    var blog1 = {
      name : 'blog1',
      description: '',
      author : 'John Doe',
      posts : [ post, post, post ]
    };

    var blog2 = {
      name : 'blog2',
      description: '',
      author : 'Jane Doe',
      posts : [ post, post, post ]
    };

    var blog3 = {
      name : 'blog3',
      description: '',
      author : 'Jimmy Dong',
      posts : [ post, post, post ]
    };
    $rootScope.blogs = [ blog1, blog2, blog3 ];
    this.count = 3;


  });
