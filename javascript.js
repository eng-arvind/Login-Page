
  var firebaseConfig = {
    apiKey: "AIzaSyBJXFLKecDyTr4HnlFPzdVIUbLlmiwpPZ0",
    authDomain: "login-page-20af1.firebaseapp.com",
    projectId: "login-page-20af1",
    storageBucket: "login-page-20af1.appspot.com",
    messagingSenderId: "810800094198",
    appId: "1:810800094198:web:472322f53a93bff2fa45d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  function signup()
  {
      //document.write("hello");
      var email = document.getElementById("email");
      var pass = document.getElementById("password");
      const promise = auth.createUserWithEmailAndPassword(email.value ,pass.value);
    promise.catch(e => alert(e.message));
    window.alert("signed up");
    window.location = "home.html";

  }
  function signin()
  {
    var email = document.getElementById("email");
    var pass = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value ,pass.value);
    promise.catch(e => alert(e.message));
    window.alert("Signed In");
    window.location = "home.html";
  }
  function signout()
  {
      auth.signOut();
      alert("signed out")
      window.location = "index.html";
  }