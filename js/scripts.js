


$(document).ready(function() {
  $("form#vacay").submit(function() {
    debugger;
    //event.preventDefault();
  //  var number1 = parseInt($(".input1").val());
  //  var number2 = parseInt($(".input2").val());
  //  var number3 = parseInt($(".input3").val());
    var operator1 = $("input:radio[name=operator1]:checked").val();
    var operator2 = $("input:radio[name=operator2]:checked").val();
    var operator3 = $("input:radio[name=operator3]:checked").val();
    var operator4 = $("input:radio[name=operator4]:checked").val();
    var operator5 = $("input:radio[name=operator5]:checked").val();
    //var result;
    var add = function(operator1, operator2, operator3, operator4, operator5) {
      var number1 = parseInt(operator1);
      var number2 = parseInt(operator2);
      var number3 = parseInt(operator3);
      var number4 = parseInt(operator4);
      var number5 = parseInt(operator5);
      var sum = number1 + number2 + number3 + number4 + number5;

        if (sum === 3 || 4) {
          result = ("Blood Hound")
        } else if (sum === 5 || 6) {
         result = ("Norwich Terrior")
        } else if (sum === 7 || 8) {
          result = ("Shitsu")
        }

    };

    add(operator1, operator2, operator3, operator4, operator5);

    $("#output").text(result);
  });
});
