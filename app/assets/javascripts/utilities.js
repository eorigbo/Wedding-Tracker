/* global $ */

$(document).ready(function(e) {
  //datepicker logic
  $(document).on('focus', '#datepicker', function(e) {
  e.preventDefault();
  $('#datepicker').datepicker({dateFormat: "DD, d MM, yy"});
  });
  
  //when the bride field is in focus...
  $(document).on('focus', '#wedding_bride', function(e) {
  e.preventDefault();
  //if field is empty
  if($('#wedding_bride').val() == ""){
    //change id of modal (id ends with Modal) to brideModal, and button id to brideModalBtn
    $("[id$=Modal]").attr('id','brideModal')
    $("[id$=ModalBtn]").attr('id','brideModalBtn')
    //Launch modal
    launchModal('#brideModal');
  }
  });

  //when brideModalBtn is clicked, update bride details
  $(document).on('click', '#brideModalBtn', function(e) { 
    e.preventDefault();
    updateFieldDetails('#wedding_bride','#brideModal');
  });
  
  //when Enter key is pressed while in brideModal, update bride details
  $(document).on('keypress', '#brideModal',function(e) {
  if(e.which == 13) {
    e.preventDefault();
    updateFieldDetails('#wedding_bride','#brideModal');
  }
  });
  
  //when the groom field is in focus...
  $(document).on('focus', '#wedding_groom', function(e) {
  e.preventDefault();
  //if the groom field is empty
  if($('#wedding_groom').val() == ""){
    //change id of modal (id ends with Modal) to brideModal, and button id to brideModalBtn
    $("[id$=Modal]").attr('id','groomModal')
    $("[id$=ModalBtn]").attr('id','groomModalBtn')
    //Launch modal
    launchModal('#groomModal');
  }
  });

  //when groomModalBtn is clicked, update bride details
  $(document).on('click', '#groomModalBtn', function(e) { 
    e.preventDefault();
    updateFieldDetails('#wedding_groom','#groomModal');
  });
  
  //when Enter key is pressed while in brideModal, update bride details
  $(document).on('keypress', '#groomModal',function(e) {
  if(e.which == 13) {
    e.preventDefault();
    updateFieldDetails('#wedding_groom','#groomModal');
  }
  });
  
  $("[id$=Modal]").on('shown.bs.modal', function() {
    $('#modal_first_name').focus();
  });
  
  function updateFieldDetails(field,modal){
    $(field).val($('#modal_first_name').val() + " " + $('#modal_last_name').val()); 
    $(modal).modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    $(field).focus();
  }
  
  function launchModal(modal){
    $('#modal_first_name').val("");
    $('#modal_last_name').val("");
    $(modal).modal();
  }
  
});


