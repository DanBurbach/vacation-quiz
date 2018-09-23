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
//newyork
    if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
      $("#newyork").show();
      $("#greeting").hide();
      $("#test").hide();
      //tokyo
    } else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#tokyo").show();
        $("#greeting").hide();
        $("#test").hide();
      }
//paris
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#paris").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //rome
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#rome").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //barcelona
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#barcelona").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //london
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#london").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //hongkong
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#hongkong").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //ronda
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#ronda").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //york
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#york").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //dublin
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#dublin").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //machupichu
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#machupichu").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //sydney
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#sydney").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //grandcanyon
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#grandcanyon").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //florence
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#florence").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //buenosaires
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#buenosaires").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //venice
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#venice").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //borabora
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#borabora").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //angkorwat
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#angkorwat").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //stlucia
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#stlucia").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //virginislands
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#virginislands").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //greatbarrierreef
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#greatbarrierreef").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //bavaria
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#bavaria").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //zanzibar
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#zanzibar").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //athens
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
        $("#athens").show();
        $("#greeting").hide();
        $("#test").hide();
      }

      //havana
      else if ((document.getElementById("1").checked)&&(document.getElementById("2").checked)&&((document.getElementById("7").checked)||(document.getElementById("10").checked)||(document.getElementById("11").checked))&&((document.getElementById("12").checked)||(document.getElementById("14").checked)||(document.getElementById("15").checked))&&(document.getElementById("18").checked)) {
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
