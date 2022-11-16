/* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  



















      (function(){
        'use strict';
        
        angular
          .module('commentsApp', [])
          .controller('CommentsController', CommentsController);
        
        // Inject $scope dependency.
        CommentsController.$inject = ['$scope'];
        
        // Declare CommentsController.
        function CommentsController($scope) {
          var vm = this;
          
          // Current comment.
          vm.comment = {};
      
          // Array where comments will be.
          vm.comments = [];
      
          // Fires when form is submited.
          vm.addComment = function() {
            // Fixed img.
            vm.comment.avatarSrc = 'http://lorempixel.com/200/200/people/';
      
            // Add current date to the comment.
            vm.comment.date = Date.now();
      
            vm.comments.push( vm.comment );
            vm.comment = {};
      
            // Reset clases of the form after submit.
            $scope.form.$setPristine();
          }
      
          // Fires when the comment change the anonymous state.
          vm.anonymousChanged = function(){
            if(vm.comment.anonymous)
              vm.comment.author = "";
          }
        }
      
      })();

      
























      $(window).load(function() {
  $('.post-card').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});
























$(document).ready(function() {
 
  $('.method').on('click', function() {
    $('.method').removeClass('blue-border');
    $(this).addClass('blue-border');
  });
 
})
var $cardInput = $('.input-fields input');
 
$('.next-btn').on('click', function(e) {
 
  $cardInput.removeClass('warning');
 
  $cardInput.each(function() {    
     var $this = $(this);
     if (!$this.val()) {
       $this.addClass('warning');
     }
  })
});





