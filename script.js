$(document).ready(function() {

    $("div#click-one").click(function(event) {
      var whatToSay = "Hello!";
      alert(whatToSay);
    });

    $("div#click-two").click(function(event) {
      alert(whatToSay);
    });
  });
  function Namer() {
    sampleName = "Cindy Lou"
  }

  $(document).ready(function() {

    $("div#click-one").click(function(event) {
      whatToSay = "Hello!";
      alert(whatToSay);
    });

    $("div#click-two").click(function(event) {
      alert(whatToSay);
    });
  });

  $(document).ready(function() {
    $("#blanks form").submit(function() {
        $(".person1").append("blah blah");
        $(".person2").append("blah blah");
        $(".animal").append("blah blah");
        $(".exclamation").append("blah blah");
        $(".verb").append("blah blah");
        $(".noun").append("blah blah");

        $("#story").show();
        event.preventDefault();
    });
});




var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event){
    event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = add(number1, number2);
  $("#output").text(result);
  console.log(result)
});
 });
 $("#add1").val();
 $("#add2").val();





 $(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val()
    var person2Input = $("input#person2").val()
    var animalInput= $("input#animal").val()
    var exclamationInput = $("input#exclamation").val()
    var verbInput = $("input#verb").val()
    var nounInput = $("input#noun").val()

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});






$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});



var flavor = $("input:radio[name=flavor]:checked").val();




var dob = $("#born").val();



var favoriteColor = $("#color").val();


// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// alert(add(number1, number2));