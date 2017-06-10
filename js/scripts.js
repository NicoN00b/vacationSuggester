
$(document).ready(function() {
  $("#submit").click(function() {
    event.preventDefault();
    var foodInput = parseInt($("input:radio[name=q1]:checked").val());
    var weatherInput = parseInt($("input:radio[name=q2]:checked").val());
    var transportInput = parseInt($("input:radio[name=q3]:checked").val());
    var flowerInput = parseInt($("input:radio[name=q4]:checked").val());
    var animalInput = parseInt($("input:radio[name=q5]:checked").val());
    var totalInput = (foodInput + weatherInput + transportInput + flowerInput + animalInput);

    $('.df').hide();
    $('.istanbul').hide();
    $('.HK').hide();

    if((totalInput >= 1 && totalInput <= 40)) {
      $('.df').show();
    } else if ((totalInput >= 45 && totalInput <= 55)) {
      $('.istanbul').show();
    } else if ((totalInput >= 60 && totalInput <= 75 )) {
      $('.HK').show();
    }  else (alert("Please completely fill out survey!"));

  });
});
