$(document).ready(function() {
  $("#letter form").submit(function() {
    var nameInput = $("input#name").val();
    $(".name").text(nameInput);

    $("#letter").show();

    event.preventDefault();
  });
});
