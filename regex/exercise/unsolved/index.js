/*
  Use regex to update the prototype functions below

  1. Replace the email validation to use regex that checks to see that "." and "&" are in the string
     Do the replacement in the isValidEmail function
  2. Add Validations to the password:
    a. make sure a password contains a capital letter
    b. make sure a password contains a number
    c. make sure a password contains a symbol

    Do the additions in the isValidPassword function
*/

var currentUserNames = ["memer27", "jumbo-shrempf", "class-of-1984"];

$("#first-form").submit(function(e){
  e.preventDefault();

  var name = $("#name-input").val();
  var email = $("#email-input").val();
  var username = $("#username-input").val();
  var password = $("#password-input").val();

  if(name.isBlank()){
    alert("please enter name")
  } else if (!email.isValidEmail()){
    alert("please enter valid email")
  } else if (currentUserNames.usernameExists(username)){
    alert("username is already taken")
  } else if (!password.isValidPassword()){
    alert("password is invalid. It must be at least 7 characters and contain a symbol");
  } else {
    var creds = {
      name: name,
      email: email,
      username: username,
      password: password,
    }

    console.log(creds);  
  }
});

String.prototype.isBlank = function(){
  return this == "";
};

String.prototype.isValidEmail = function(){
  return this.indexOf("@") > -1 && this.indexOf(".") > -1;
}

Array.prototype.usernameExists = function(username){
  return this.indexOf(username) > -1
}

String.prototype.isValidPassword = function(){
  return this.length > 6;
}
