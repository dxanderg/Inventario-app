$(document).ready(function(){
  var i=1;
  $("#add_row").click(function(){
    $('#addr'+i).html("<td>"+ (i+1) +"</td><td><div id='select-list'><div class=''><select class='form-control'><option></option></select></div></div></td><td><div id='select-list'><div class=''><select class='form-control'><option></option></select></div></div></td><td><div id='select-list'><div class=''><select class='form-control'><option></option></select></div></div></td><td><i class='fa fa-arrows-h'></i></td><td><div id='select-list'><div class=''><select class='form-control'><option></option></select></div></div></td><td><div id='select-list'><div class=''><select class='form-control'><option></option></select></div></div></td><td><div id='select-list'><div class=''><select class='form-control'><option></option></select></div></div></td><td><input type='checkbox' name='inversa' class='form-check-input big-checkbox'></td></tr>");
      $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
        i++;
      });
      $("#delete_row").click(function(){
        if(i>1){
          $("#addr"+(i-1)).html('');
          i--;
        }
      });
});