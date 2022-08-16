/* 
This is where messages can be sent by users within the chatroom. 
*/
const database = firebase.database().ref();

const inputBox = document.getElementById("post-box");
const sendButton = document.getElementById("postbutton");
const clearButton = document.getElementById("clearbutton");
const collegeButton = document.getElementById("collegelistbutton");
const username = document.getElementById("username");

const allMessages = document.getElementById('all-messages');

database.on('child_added', addPost);

function addPost(postData) {
    const postObject = postData.val();

    if (postObject.USERNAME == '' || postObject.POST == '') {
        alert("Please enter a message/username.")
    }

    else {
        let messageDiv = makeSingleMessageHTML(postObject.USERNAME, postObject.POST);
        let newMessage = allMessages.appendChild(messageDiv);
        newMessage.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
    
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

sendButton.onclick = updateDB;

function updateDB(event) {
    event.preventDefault();

    const post = {
        USERNAME: username.value,
        POST: inputBox.value
    };

    console.log(post);
    database.push(post);

    
}

clearButton.onclick = clearDB; 

function clearDB() {
    console.log("clearing...");
    database.remove();

}

collegeButton.onclick = gobacktocollegelist; 

function gobacktocollegelist(event) {
    event.preventDefault();
    window.location.href = "collegePage.html";
}


