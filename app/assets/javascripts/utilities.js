/* global $ */

$(document).on('focus', '#datepicker', function(e) {
  e.preventDefault();
  $('#datepicker').datepicker({dateFormat: "DD, d MM, yy"});
});


