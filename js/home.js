$(document).ready(function() {
  // Initialize Materialize
  // F. Collapse
  $('.button-collapse').sideNav();
  // F. Slider
  $('.slider').slider({ full_width: true });
  // F. Modal
  $('.modal').modal();
  // Reinitialize all the Materialize labels on the page
  Materialize.updateTextFields()

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

  // boolean var to validate log-in-btn 
  var validateName = false;
  var validateLastName = false;
  var validateEmail = false;
  var validatePassword = false;

  //  REGISTER MODAL

  // bring values from register form modal
  var $firstName = $('#first-name');
  // console.log($('#firstName').val());
  var $lastName = $('#last-name');
  // console.log($('#lasttName').val());
  var $email = $('#email');
  // console.log($('#email').val()) 
  var $password = $('#password');
  // console.log($('#password').val());
  var $registerBtn = $('#register-btn');
  // console.log($('#register-btn').val());

  // Validate name 
  // $name.on('input', function(event){
  //   if($firstName.val().length >= 4) {
  //     validateName = true;
  //     activeButton(); 
  //   } else {
  //     desactiveButton();
  //   }
  // });
  // Validate last name 
  // $name.on('input', function(event){
  //   if($lastName.val().length >= 4) {
  //     validateLastName = true;
  //     activeButton(); 
  //   } else {
  //     desactiveButton();
  //   }
  // });
  // validate email
  $email.on('input', function(event) {
    // console.log(event.target.value);
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeBtn(); 
    } else {
      desactiveBtn();
    }
  });
  // validate psw
  $password.on('input', function() {
    if ($(this).val().length >= 6) {
      validatePassword = true;
      activeBtn(); 
    } else {
      desactiveBtn(); 
    }
  });
  // Send info
  $('form > #register-btn').on('click', function(event) {
    event.preventDefault();
    localStorage.email = $email.val();
    localStorage.password = $password.val();
    window.location.href = 'user-profile.html';
  });

  // $( "p" ).click(function() {
  //   $( this ).toggleClass( "highlight" );
  // });



  // LOG-IN MODAL 
  
  // bring values from log-in form modal
  var $userEmail = $('#user-email');
  var $userPassword = $('#user-password');
  var $loginBtn = $('#log-in-btn');

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

  // login function
  $loginBtn.on('click', function(event) {
    event.preventDefault();
    if (validateEmail && validatePassword) { // If both are true
      activeBtn();
      // window.location.href = '#';
    } else {
      desactiveBtn();
    }
  }); 

  // btn active
  function activeBtn() {
    if (validateEmail && validatePassword) {
      $("#registerBtn").prop("disabled", true); 
    }
  }
  // btn desactive
  function desactiveBtn() {
    $("#registerBtn").prop("disabled", false); 
  } 

  // $('form > button').on('click', (function(event) {
  //   $( this ).toggleClass( "disabled" );
  // });
}); // END
