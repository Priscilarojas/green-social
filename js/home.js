$(document).ready(function() {
  // Initialize Materialize
  // F. Collapse
  $('.button-collapse').sideNav();
  // F. Slider
  $('.slider').slider({ full_width: true });
  // F. Modal
  $('.modal').modal();

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyD8_7Zo4brdDKFfFhjPut46HOVgsl5cr30',
    authDomain: 'red-social-1c685.firebaseapp.com',
    databaseURL: 'https://red-social-1c685.firebaseio.com',
    projectId: 'red-social-1c685',
    storageBucket: 'red-social-1c685.appspot.com',
    messagingSenderId: '967426604554'
  };
  firebase.initializeApp(config);

  var user = null;

  var $loginBtn = $('#start-login');
  // función para googleLogin
  $loginBtn.on('click', googleLogin);

  function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    //  firebase doc
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // save user
      user = result.user;
      //show its content
      console.log(user);
      // hide log'in div
      $('#login').fadeOut();
    });
  }

  // bring values from register form modal
  var $firstName = $('#first-name');
  // console.log('firstName');
  var $lastName = $('#last-name');
  // console.log('lasttName');
  var $email = $('#email');
  // console.log('email');
  var $password = $('#password');
  // console.log('password');
  var $registerBtn = $('#register-btn');
  // console.log('register-btn');

  // bring values from log-in form modal
  var $userEmail = $('#user-email');
  var $userPassword = $('#user-password"');
  var $loginBtn = $('#log-in-btn"');

  // boolean var to validate log-in-btn 
  var validateEmail = false;
  var validatePassword = false;
 
  $userEmail.on('input', function() {
    if ($(this).val() === localStorage.email) {
      // console.log(localStorage.email);
      validateEmail = true;
    }
  });

  $userPassword.on('input', function() {
    if ($(this).val() === localStorage.password) {
      // console.log(localStorage.password);
      validatePassword = true;
    }
  });

  $loginBtn.on('click', function(event) {
    event.preventDefault();
    if (validateEmail && validatePassword) {
      alert('Validación Completa');
      $('form > button').attr('disabled', false);
      window.location.href = '../views/user-profile.html';
    } else {
      desactiveButton()
      alert('Vuelve a intentarlo');
      window.location.href = '../views/home.html';
    }
  });

  // disabled btn
  function desactiveButton() {
    $('form > button').attr('disabled', 'disabled');
  } 


}); // END
