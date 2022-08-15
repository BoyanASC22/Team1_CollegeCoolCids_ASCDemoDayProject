const database = firebase.database().ref();

const inputBox = document.getElementById("post-box");
const sendButton = document.getElementById("postbutton");
const username = document.getElementById("username");

console.log(sendButton);

sendButton.onclick = updateDB;

function updateDB(event) {
    event.preventDefault();

    const post = {
        USERNAME: username.value,
        POST: inputBox.value
    };

    console.log(post);
    database.push(post);
    
    window.location.href = "index.html";
}