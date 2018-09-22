$(document).ready(function() {
  var person = prompt("Please enter your name:", "Your name here");
    if (person !=null){
      document.getElementById("person").innerHTML = person;
      $("#greeting").show();
      $("#test").show();
debugger
  function showplaces() {
    $("form#test").button(function(event) {
debugger
//    var Q1 = $("input:radio[name=Q1]:checked").val();
//    var Q2 = $("input:radio[name=Q2]:checked").val();
//    var Q3 = $("input:radio[name=Q3]:checked").val();
//    var Q4 = $("input:radio[name=Q4]:checked").val();
//    var Q5 = $("input:radio[name=Q5]:checked").val();
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

      event.preventDefault();

  });
});
