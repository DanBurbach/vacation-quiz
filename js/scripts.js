$(document).ready(function() {
  var person = prompt("Please enter your name:", "Your name here");
  if (person !=null) {
    document.getElementById("person").innerHTML = person;
    $("#greeting").show();
    $("#test").show();
    $("#jumbotron").show();
  }
// button push
  $("#submitbutton").click(function(e){
debugger
    var Question1 = document.getElementById("Question1").value;
    var Question2 = document.getElementById("Question2").value;
    var Question3 = document.getElementById("Question3").value;
    var Question4 = document.getElementById("Question4").value;
    var Question5 = document.getElementById("Question5").value;
debugger
    if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
      $("#newyork").show();
      $("#greeting").hide();
      $("#test").hide();
    } else if ((document.getElementById("1").checked)&&(document.getElementById("4").checked)&&((document.getElementById("7").checked)||(document.getElementById("8").checked)||(document.getElementById("9").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked))&&(document.getElementById("18").checked)) {
        $("#tokyo").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("1").checked)&&(document.getElementById("6").checked)&&((document.getElementById("7").checked)||(document.getElementById("8").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#paris").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("1").checked)&&(document.getElementById("6").checked)&&(document.getElementById("8").checked)&&((document.getElementById("13").checked)||(document.getElementById("15").checked))&&(document.getElementById("17").checked)) {
        $("#rome").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("1").checked)&&((document.getElementById("2").checked)||(document.getElementById("4").checked))&&((document.getElementById("7").checked)||(document.getElementById("8").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("13").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked)||(document.getElementById("16").checked))&&((document.getElementById("17").checked)||(document.getElementById("18").checked)) {
        $("#barcelona").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("1").checked)&&(document.getElementById("3").checked)&&((document.getElementById("8").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("14").checked)||(document.getElementById("15").checked)||(document.getElementById("16").checked))&&((document.getElementById("17").checked)||(document.getElementById("18").checked)) {
        $("#london").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("1").checked)&&(document.getElementById("3").checked)&&((document.getElementById("7").checked)||(document.getElementById("8").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#hongkong").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("2").checked)&&((document.getElementById("4").checked)||(document.getElementById("6").checked))&&((document.getElementById("7").checked)||(document.getElementById("8").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("13").checked)||(document.getElementById("15").checked))&&((document.getElementById("17").checked)||(document.getElementById("18").checked)||(document.getElementById("19").checked)) {
        $("#ronda").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("2").checked)&&((document.getElementById("5").checked)||(document.getElementById("6").checked))&&((document.getElementById("8").checked)||(document.getElementById("9").checked)||(document.getElementById("10").checked))&&((document.getElementById("13").checked)||(document.getElementById("15").checked))&&((document.getElementById("17").checked)||(document.getElementById("18").checked)) {
        $("#york").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("1").checked)&&(document.getElementById("6").checked)&&((document.getElementById("8").checked)||(document.getElementById("9").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("15").checked))&&((document.getElementById("17").checked)||(document.getElementById("19").checked)) {
        $("#dublin").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("2").checked)&&(document.getElementById("4").checked)&&((document.getElementById("8").checked)||(document.getElementById("11").checked))&&((document.getElementById("13").checked)||(document.getElementById("15").checked))&&((document.getElementById("17").checked)||(document.getElementById("19").checked)) {
        $("#machupichu").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("1").checked)&&(document.getElementById("3").checked)&&((document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("15").checked))&&(document.getElementById("17").checked)) {
        $("#sydney").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("2").checked)&&(document.getElementById("4").checked)&&((document.getElementById("8").checked)||(document.getElementById("9").checked))&&((document.getElementById("13").checked)||(document.getElementById("15").checked))&&(document.getElementById("19").checked)) {
        $("#grandcanyon").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("1").checked)&&(document.getElementById("4").checked)&&((document.getElementById("8").checked)||(document.getElementById("9").checked)||(document.getElementById("11").checked))&&((document.getElementById("13").checked)||(document.getElementById("15").checked))&&(document.getElementById("17").checked)) {
        $("#florence").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("1").checked)&&((document.getElementById("4").checked)||(document.getElementById("5").checked))&&((document.getElementById("7").checked)||(document.getElementById("9").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("13").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked)||(document.getElementById("16").checked))&&((document.getElementById("17").checked)||(document.getElementById("18").checked)||(document.getElementById("19").checked)) {
        $("#buenosaires").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("1").checked)&&(document.getElementById("3").checked)&&((document.getElementById("7").checked)||(document.getElementById("8").checked)||(document.getElementById("9").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&(document.getElementById("13").checked)&&((document.getElementById("17").checked)||(document.getElementById("19").checked)) {
        $("#venice").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("2").checked)&&(document.getElementById("3").checked)&&((document.getElementById("7").checked)||(document.getElementById("9").checked)||(document.getElementById("11").checked))&&((document.getElementById("13").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked)||(document.getElementById("16").checked))&&((document.getElementById("17").checked)||(document.getElementById("19").checked)) {
        $("#borabora").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("2").checked)&&((document.getElementById("5").checked)||(document.getElementById("6").checked))&&((document.getElementById("8").checked)||(document.getElementById("9").checked)||(document.getElementById("11").checked))&&(document.getElementById("15").checked)&&((document.getElementById("17").checked)||(document.getElementById("19").checked)) {
        $("#angkorwat").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("2").checked)&&(document.getElementById("3").checked)&&((document.getElementById("7").checked)||(document.getElementById("9").checked)||(document.getElementById("10").checked))&&((document.getElementById("12").checked)||(document.getElementById("13").checked)||(document.getElementById("14").checked)||(document.getElementById("16").checked))&&((document.getElementById("17").checked)||(document.getElementById("18").checked)||(document.getElementById("19").checked)) {
        $("#stlucia").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("2").checked)&&(document.getElementById("3").checked)&&((document.getElementById("7").checked)||(document.getElementById("9").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("13").checked)||(document.getElementById("14").checked))&&(document.getElementById("17").checked)){
        $("#virginislands").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("2").checked)&&(document.getElementById("3").checked)&&((document.getElementById("7").checked)||(document.getElementById("9").checked))&&((document.getElementById("13").checked)||(document.getElementById("16").checked))&&((document.getElementById("17").checked)||(document.getElementById("19").checked)) {
        $("#greatbarrierreef").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("2").checked)&&((document.getElementById("4").checked)||(document.getElementById("5").checked)||(document.getElementById("6").checked))&&((document.getElementById("7").checked)||(document.getElementById("8").checked)||(document.getElementById("9").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("13").checked)||(document.getElementById("15").checked)||(document.getElementById("16").checked))&&((document.getElementById("17").checked)||(document.getElementById("18").checked)) {
        $("#bavaria").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("2").checked)&&(document.getElementById("3").checked)&&((document.getElementById("7").checked)||(document.getElementById("8").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("13").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked)||(document.getElementById("16").checked))&&(document.getElementById("17").checked)||(document.getElementById("18").checked)) {
        $("#zanzibar").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("1").checked)&&(document.getElementById("6").checked)&&((document.getElementById("8").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("13").checked)||(document.getElementById("15").checked))&&(document.getElementById("17").checked))&&(document.getElementById("19").checked)) {
        $("#athens").show();
        $("#greeting").hide();
        $("#test").hide();
    } else if ((document.getElementById("1").checked)&&((document.getElementById("3").checked)||(document.getElementById("6").checked))&&((document.getElementById("7").checked)||(document.getElementById("8").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked))&&((document.getElementById("17").checked)||(document.getElementById("19").checked)) {
        $("#havana").show();
        $("#greeting").hide();
        $("#test").hide();
    } else {
      $("#roadtrip").show();
      $("#greeting").hide();
      $("#test").hide();
    }

debugger
    event.preventDefault();
  });
});
