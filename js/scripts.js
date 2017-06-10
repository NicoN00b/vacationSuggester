var addNumbers = function(a, b, c, d, e) {
  var numericResult = a + b + c + d + e;
  return numericResult;
};


if (addNumbers() < 7) {
  document.getElementById("#df").alert;
} else if ((addNumbers() > 6)&&(addNumbers() < 11)) {
  document.getElementById("#istanbul").alert;
} else if (addNumbers() > 10) {
  document.getElementById("#HK").alert;
}



$(document).ready(function() {
  $("form#vacay").submit(function() {

    var operator1 = parseInt("input:radio[name=operator1]:checked").val();
    var operator2 = parseInt("input:radio[name=operator2]:checked").val();
    var operator3 = parseInt("input:radio[name=operator3]:checked").val();
    var operator4 = parseInt("input:radio[name=operator4]:checked").val();
    var operator5 = parseInt("input:radio[name=operator5]:checked").val();

    addNumbers(operator1, operator2, operator3, operator4, operator5);


    $("#output").show(result);

  });
});
