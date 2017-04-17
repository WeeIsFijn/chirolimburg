document.getElementById("btnInschrijf").addEventListener('click', function(){
  var email_first = document.getElementById('email_first');
  var email = document.getElementById('email');
  email.value = email_first.value;

});
