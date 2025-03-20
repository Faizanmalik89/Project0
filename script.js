// Firebase Authentication
function signup() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        alert("Signup Successful!");
    })
    .catch((error) => {
        alert(error.message);
    });
}

function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        alert("Login Successful!");
        window.location.href = "blogs.html";
    })
    .catch((error) => {
        alert(error.message);
    });
}
