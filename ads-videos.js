firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("user-status").innerText = "You are logged in.";
    } else {
        document.getElementById("user-status").innerText = "Please login to watch videos.";
    }
});
