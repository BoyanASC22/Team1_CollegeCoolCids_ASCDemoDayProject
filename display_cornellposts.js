
const database = firebase.database().ref();

const newPostBtn = document.getElementById('newbutton1');

newPostBtn.onclick = newPost;

function newPost(event) {
    event.preventDefault();
    window.location.href = 'sendcornellMessages.html';
}

