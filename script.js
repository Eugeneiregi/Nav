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