// Firebase Configuration (Ensure this matches your Firebase project)
const firebaseConfig = {
    apiKey: "AIzaSyAeopZBOH519qVwLkAL06RttMG-wyfAC5M",
    authDomain: "realistic-c5616.firebaseapp.com",
    projectId: "realistic-c5616",
    storageBucket: "realistic-c5616.firebasestorage.app",
    messagingSenderId: "809481702160",
    appId: "1:809481702160:web:10a82f267efb5dcc137395"
};
firebase.initializeApp(firebaseConfig);

// Signup Function
function signup() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        alert("Signup Successful! You can now login.");
        window.location.href = "login.html"; // Redirect to login page
    })
    .catch((error) => {
        console.error(error.message);
        alert(error.message);
    });
}

// Login Function
function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        alert("Login Successful!");
        window.location.href = "blogs.html"; // Redirect after login
    })
    .catch((error) => {
        console.error(error.message);
        alert(error.message);
    });
}

// Check User Authentication Status
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("User is signed in:", user.email);
    } else {
        console.log("No user is signed in.");
    }
});
