$(document).ready(function() {
  var person = prompt("Please enter your name:", "Your name here");
    if (person !=null){
      document.getElementById("person").innerHTML = person;
      $("#greeting").show();
      $("#test").show();
      }
debugger
function showplaces() {
  $("form#test").button(function(event) {
debugger

  var Q1 = $("input:radio[name=Q1]:checked").val();

  var Q2 = $("input:radio[name=Q2]:checked").val();

  var Q3 = $("input:radio[name=Q3]:checked").val();

  var Q4 = $("input:radio[name=Q4]:checked").val();

  var Q5 = $("input:radio[name=Q5]:checked").val();
debugger

//Below is interaction with radio button results;

//newyork
  if (Q1 === 1 && Q2 === 1 && Q3 === 1 && Q4 === 3 && Q5 === 2) {
    $("#newyork").show();
    $("#greeting").hide();
    $("#test").hide();
  }
//tokyo

//paris

//rome

//barcelona

//london

//hongkong

//ronda

//york

//dublin

//machupichu

//sydney

//grandcanyon

//florence

//buenosaires

//venice

//borabora

//angkorwat

//stlucia

//virginislands

//greatbarrierreef

//bavaria

//zanzibar

//athens

//havana

// Logic of radio buttons equalling a value;
//    if ($('input:radio[name=Q1, value=1A]:checked').val() === 'city');
//      else if ($('input:radio[name=Q1, value=1B]:checked').val() === 'landscape');
//    if ($('input:radio[name=Q2, value=1A]:checked').val() === 'oceanview');
//      else if($('input:radio[name=Q2, value=1B]:checked').val() === 'mountainview');
//      else if($('input:radio[name=Q2, value=1C]:checked').val() === 'forestview');
//      else if($('input:radio[name=Q2, value=1D]:checked').val() === 'rollinghills');
//    if ($('input:radio[name=Q3, value=1A]:checked').val() === 'food');
//      else if($('input:radio[name=Q3, value=1B]:checked').val() === 'history');
//      else if($('input:radio[name=Q3, value=1C]:checked').val() === 'people');
//      else if($('input:radio[name=Q3, value=1D]:checked').val() === 'shopping');
//      else if($('input:radio[name=Q3, value=1E]:checked').val() === 'arts');
//    if ($('input:radio[name=Q4, value=1A]:checked').val() === 'music');
//      else if($('input:radio[name=Q4, value=1B]:checked').val() === 'relax');
//      else if($('input:radio[name=Q4, value=1C]:checked').val() === 'nightlife');
//      else if($('input:radio[name=Q4, value=1D]:checked').val() === 'walking');
//      else if($('input:radio[name=Q4, value=1E]:checked').val() === 'sports');
//    if($('input:radio[name=Q5, value=1A]:checked').val() === 'casual');
//      else if($('input:radio[name=Q5, value=1B]:checked').val() === 'urban');
//      else if($('input:radio[name=Q5, value=1C]:checked').val() === 'rustic');

      event.preventDefault();

  });
});
