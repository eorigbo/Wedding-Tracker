/* global $ */
/*$(document).on('ready page:load', function () {
  alert("Page loaded");
});*/



$(document).on('click', '#testalertlink2', function(e){
    e.preventDefault();
    console.log("link clicked");
    var testvarout = $('#testalertvar1').data('action');
    $('#testalertvar1').html(testvarout);
  });

var ready;

ready = function(){
  
};

$(document).ready(ready);