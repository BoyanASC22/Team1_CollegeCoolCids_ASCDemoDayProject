const database = firebase.database().ref(); // references our database (firebase)

/* These are the initializations for where the user inputs a username/message. */
const username = document.getElementById("username"); // initializes the box where the user inputs a username 
const inputBox = document.getElementById("post-box"); // initializes the box where the user inputs a message
const userImage = document.getElementById("image"); // initializes the file where the user chooses an image to upload

/* These are the initializations for where the user is able to access the postbutton, clearbutton, and collegelistbutton. */
const sendButton = document.getElementById("postbutton"); // initializes the button where the user sends the inputted username/message
const clearButton = document.getElementById("clearbutton"); // initializes the button where the outputted usernames/messages are erased
const collegeButton = document.getElementById("collegelistbutton"); // initializes the button that allows the user to go back to the collegePage (shows the college list)
const collegeMenu = document.getElementById("collegeMenu"); // initializes the select menu that allows the user to pick a specific college

/* These are the initializations for where the inputted username/message is outputted and where the inputted username/message is saved. */
const allMessages = document.getElementById('all-messages'); // initializes the div in which the inputted username/message is outputted in by the user
const history = []; // initializes an array that keeps the user's inputted username/message inside an array, which can be called again when the collegeMenu.value equals a specific value
/*_______________________________________________________________________________________________________________________________________________________________________________________ */

/* makeSingleMessageHTML(usernameTxt, messageTxt):
        usernameTxt: acts as a parameter / takes in the user's inputted value for 'username'
        messageTxt: acts as a parameter / takes in the user's inputted value for 'inputBox'

        makeSingleMessageHTML function: 
            - creates a "div" element called 'parentDiv'
                - creates a "p" element called usernameDisplay 
                - appends this element to the 'parentDiv', allowing the function to display the user's inputted username/message
*/

function makeSingleMessageHTML(usernameTxt, messageTxt) {
    let parentDiv = document.createElement('div');
    parentDiv.classList.add('single-message');

    let usernameDisplay = document.createElement('p');
    usernameDisplay.classList.add('single-message');
    usernameDisplay.innerHTML = "[" + usernameTxt + "]" + " " + messageTxt;
    parentDiv.appendChild(usernameDisplay);

    
    return parentDiv;


}
/*________________________________________________________________________________________________________________________________________________________________________________________ */

/* updateDB(event) function:
        - event.preventDefault(); : prevents the page from reloading when the sendButton is clicked 
        - post: the 'post' variable takes in all the inputted values of username, post, and college (will be explained later)
        - console.log(post): outputs the values into the console, which allows us to check whether or not the sendButton is working 
        - database.push(post): the inputted values inside the 'post' variable is pushed into our previously referenced database (firebase)
*/
sendButton.onclick = updateDB;
function updateDB(event) {
    event.preventDefault();

    const post = {
        USERNAME: username.value,
        POST: inputBox.value,
        COLLEGE: collegeOption,
        

    };

    console.log(post);
    database.push(post);
    inputBox.value = "";
}
/*__________________________________________________________________________________________________________________________________________________________________________________________ */

/* addPost(postData) function: 
        - postObject variable: stores the value of the parameter 'postData'
        - first if statement: checks if the inputted values for username/message of postData is empty or not, will alert if empty
        - second if statement: checks which collegeOption the user is currently in and executes the following code based on the collegeOption 

*/
function addPost(postData) {
    const postObject = postData.val();

    if (postObject.USERNAME == '' || postObject.POST == '') { // postObject.USERNAME and postObject.COLLEGE takes the values from the sendButton, inside the 'post' variable
        alert("Please enter a message/username.")
        postData.remove();
    }
    

    // !!! change this so that this occurs when the stuff is written inside the database 

    if (postObject.COLLEGE == collegeOption) { // postObject.COLLEGE takes the value from the collegeMenu
        let messageDiv = makeSingleMessageHTML(postObject.USERNAME, postObject.POST);
        let newMessage = allMessages.appendChild(messageDiv);
        newMessage.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }); // allows the console to scroll to the newest message outputted by the console 
    }
}
/*__________________________________________________________________________________________________________________________________________________________________________________________ */

/* database.on('child_added', function(postData) {
    addPost(postData)
    history.push(postData)
});

        - 'child_added': a built-in firebase event that retrieves the user's inputted values from the database
        - .on() JQuery Method: attaches more than one event handler to the variable 'database'
        - history.push(postData): pushes all the inputted values from 'postData' into the 'history' array

*/
database.on('child_added', function (postData) {
    addPost(postData)
    history.push(postData)
});
/*___________________________________________________________________________________________________________________________________________________________________________________________ */

/* 
collegeMenu.onchange = function ():
        - .onchange: occurs when the user selects a different option in the select element/select menu
*/

collegeMenu.onchange = function () {
    collegeOption = collegeMenu.value; // creates the collegeOption variable, used by the updateDB(event) function 
    allMessages.innerHTML = ''; // innerHTML for the allMessages div is emptied
    for (let i = 0; i < history.length; i++) {
        addPost(history[i]); // will call the previously inputted messages from the 'history' array, and executes the addPost function
    }
}

let collegeOption = collegeMenu.value;
/*__________________________________________________________________________________________________________________________________________________________________________________________ */

/* clearDB() function: 
        - removes the inputted information from the database once the clearButton is clicked

*/
clearButton.onclick = clearDB;

function clearDB() {
    console.log("clearing...");
    database.remove();

}
/*__________________________________________________________________________________________________________________________________________________________________________________________ */

/* gobacktocollegelist(event): 
        - goes back to the collegePage.html page 

*/
collegeButton.onclick = gobacktocollegelist;

function gobacktocollegelist(event) {
    event.preventDefault();
    window.location.href = "collegePage.html";
}
/*__________________________________________________________________________________________________________________________________________________________________________________________ */

/* 

let imageDisplay = document.createElement('div');
    userImage.addEventListener("change", function () {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            uploadedImage = reader.result;
            imageDisplay.style.backgroundImage = `url(${uploadedImage})`;
        });
        reader.readAsDataURL(this.files[0]);
    });
    
    imageDisplay.classList.add('single-image');
    parentDiv.appendChild(imageDisplay);

*/
