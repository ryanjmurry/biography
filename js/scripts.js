$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var ageInput = $("input#age").val();
    var birthCityInput = $("input#birth-city").val();
    var currentCityInput = $("input#current-city").val();
    var jobInput = $("input#job").val();
    var animalInput = $("input#animal").val();
    var colorInput = $("input#color").val();
    var subjectInput = $("input#subject").val();
    var sportInput = $("input#sport").val();
    var seasonInput = $("input#season").val();

    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".birth-city").text(birthCityInput);
    $(".current-city").text(currentCityInput);
    $(".job").text(jobInput);
    $(".animal").text(animalInput);
    $(".color").text(colorInput);
    $(".subject").text(subjectInput);
    $(".sport").text(sportInput);
    $(".season").text(seasonInput);

    $("#story").show();

    event.preventDefault();
  });
});
