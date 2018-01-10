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
    // esta es la doc de firebase
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // guardamos el usuario que nos trae resuslt
      user = result.user;
      // mostramos su contenido
      console.log(user);
      // ocultamos el div de login
      $('#login').fadeOut();
    });
  }
}); // END
