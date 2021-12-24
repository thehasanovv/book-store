import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// import {
//   getDatabase,
//   ref,
//   set,
//   onValue,
// } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAJ-eqplSjwcTbbHbewQzlUe9Y8otdbYto",
  authDomain: "book-store-69694.firebaseapp.com",
  projectId: "book-store-69694",
  storageBucket: "book-store-69694.appspot.com",
  messagingSenderId: "434964076450",
  appId: "1:434964076450:web:40c86964585bb16b8384fb",
});

// ==============
// Sign in
// ==============

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const auth = getAuth(firebaseApp);
var join = $(".join");
join.on("click", function (e) {
  const email = $(".username").val();
  const password = $(".password").val();

  var MinLength = 6;
  var MaxLength = 15;
  if (password.length < MinLength || password.length > MaxLength) {
    $("#password-error-message").text("Şifrə 6-12 aralığı olmadır");
    $("#password-error-message").css({
      color: "red",
    });
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("user logged in:", userCredential.user);

      document.querySelector(".login-container").classList.add("d-none");
      document.querySelector(".myGif").src =
        "assets/images/Infinity-1s-200px.gif";

      setTimeout(function () {
        document.querySelector(".myGif").src = "";
        window.location = "./admin.html";
      }, 3000);
    })
    .catch((error) => {
      console.log(error.message);
      //  Email validate
      const $result = $("#email-error-message");
      const email = $(".username").val();
      $result.text("");

      if (!validateEmail(email)) {
        $result.text("düzgün email adresi daxil edin");
        $result.css({
          color: "red",
          "font-size": "20px",
          "font-weight": "400",
        });
        return false;
      }
    });
});
///////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// ==============
// Sign out
// ==============
$(document).on("click", "#log-out", function () {
  console.log("asd");
  signOut(auth)
    .then((userCredential) => {
      window.location = "./admin-login.html";
      console.log("userCredential");
    })
    .catch((error) => {
      console.log(error.message);
    });
});
//////////////////////////////////////////////////////////////////////////////////
// const firebaseConfig = {
//   apiKey: "AIzaSyDUUjOIVctqnzMjD5gEGITXsjWu_O2oOvM",
//   authDomain: "bookstore-f7e2c.firebaseapp.com",
//   databaseURL: "https://bookstore-f7e2c-default-rtdb.firebaseio.com",
//   projectId: "bookstore-f7e2c",
//   storageBucket: "bookstore-f7e2c.appspot.com",
//   messagingSenderId: "522070526624",
//   appId: "1:522070526624:web:6306f8fcf17e20ebeed7c5",
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);
// writeUserData("001", "Elnur", "Hasanov");
// writeUserData("002", "Teymur", "Hasanov");

// function writeUserData(userId, name, surname) {
//   set(ref(db, "users/" + userId), {
//     username: name,
//     usersurname: surname,
//   });
// }

// const starCountRef = ref(db, "/");
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   console.log(data);
// });
////////////////////////////////////////////////////////////////////////////////////////
