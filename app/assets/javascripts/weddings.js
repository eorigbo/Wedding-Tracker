/* global $ */

function UcFirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function(e) {
  //datepicker logic
  $(document).on('focus', '#datepicker', function(e) {
    e.preventDefault();
    $('#datepicker').datepicker({
      dateFormat: "DD, MM d, yy"
      ,onSelect: function(dateText, inst) {
        $(this).focus();
      }
    });
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
  
  //when groomModalBtn is clicked, update groom details
  $(document).on('click', '#groomModalBtn', function(e) { 
    e.preventDefault();
    updateFieldDetails('#wedding_groom','#groomModal');
  });

  
  //when Enter key is pressed while in brideModal, update bride details
  $(document).on('keypress', '#brideModal',function(e) {
    if(e.which == 13) {
      e.preventDefault();
      updateFieldDetails('#wedding_bride','#brideModal');
    }
  });
  
   //when Enter key is pressed while in groomModal, update groom details
  $(document).on('keypress', '#groomModal',function(e) {
    if(e.which == 13) {
      e.preventDefault();
      updateFieldDetails('#wedding_groom','#groomModal');
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
  
 function updateFieldDetails(field,modal){
    $(field).val(UcFirst($('#modal_first_name').val()) + " " + UcFirst($('#modal_last_name').val())); 
    closeAndFocus(modal,field);
  }
  
  function closeAndFocus(modal,field){
    $(modal).modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    $(field).focus();
  }
  
  function launchModal(modal){
    $('#modal_first_name').val("");
    $('#modal_last_name').val("");
    if(modal == "#groomModal"){
      $('#weddingModalLabel').text("Groom Details");
    } else{
      $('#weddingModalLabel').text("Bride Details");
    }
    
    //focus on first input text field when modal is shown
    $("[id$=Modal]").on('shown.bs.modal', function() {
      $('#modal_first_name').focus();
    });  
    
    $(modal).modal();
  }
  
});
