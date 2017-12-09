
document.getElementsByTagName("button")[0].addEventListener("click", function(){
  var number_ferst = document.getElementsByName("ferst_number")[0].value;
  var number_second = document.getElementsByName("second_number")[0].value;
  var result = document.getElementsByTagName("span")[0];
  result.innerHTML = (+number_ferst + +number_second).toFixed(1);
});
document.getElementsByTagName("button")[1].addEventListener("click", function(){
  var number_ferst = document.getElementsByName("ferst_number")[0].value;
  var number_second = document.getElementsByName("second_number")[0].value;
  var result = document.getElementsByTagName("span")[0];
  result.innerHTML = (+number_ferst - +number_second).toFixed(1);
});
document.getElementsByTagName("button")[2].addEventListener("click", function(){
  var number_ferst = document.getElementsByName("ferst_number")[0].value;
  var number_second = document.getElementsByName("second_number")[0].value;
  var result = document.getElementsByTagName("span")[0];
  result.innerHTML = (+number_ferst * +number_second).toFixed(1);
});
document.getElementsByTagName("button")[3].addEventListener("click", function(){
  var number_ferst = document.getElementsByName("ferst_number")[0].value;
  var number_second = document.getElementsByName("second_number")[0].value;
  var result = document.getElementsByTagName("span")[0];
  result.innerHTML = (+number_ferst / +number_second).toFixed(1);
});
    