const database = firebase.database().ref();

const allPosts = document.getElementById('all-posts');

const newPostBtn = document.getElementById('newbutton');
const clearButton = document.getElementById('clearbutton');

console.log(allPosts);

database.on('child_added', addPost);

function addPost(postData) {
    const postObject = postData.val();
    console.log(postObject);

    let messageDiv = makeSingleMessageHTML(postObject.USERNAME, postObject.POST);
    allPosts.appendChild(messageDiv);
}

function makeSingleMessageHTML(usernameTxt, messageTxt) {
    let parentDiv = document.createElement('div');
    parentDiv.classList.add('single-message');

    let usernameDisplay = document.createElement('p');
    usernameDisplay.classList.add('single-message');
    usernameDisplay.innerHTML = 'Posted by: ' + usernameTxt + '\n';
    parentDiv.appendChild(usernameDisplay);

    let messageDisplay = document.createElement("p");
    messageDisplay.classList.add('single-message');
    messageDisplay.innerHTML = messageTxt;
    parentDiv.appendChild(messageDisplay);

    return parentDiv;
}

newPostBtn.onclick = newPost;

function newPost(event) {
    event.preventDefault();
    window.location.href = 'createBlog.html';
}

clearButton.onclick = clearDB;

function clearDB(event) {
    console.log('clearing');
    database.remove()
}