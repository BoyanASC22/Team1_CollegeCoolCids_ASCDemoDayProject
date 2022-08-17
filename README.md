# Team1_CollegeCoolCids_ASCDemoDayProject

Team Members: Aidan, Boyan, Nicholas, Shrikar

#collegePageHTMLBody {
    /* size and colors */
    height: 100vh;
    background-color: #ff9000;
    color: #fff;

    /* flexbox styling */
    display: block;
    justify-content: center;
    align-items: center;

    /* text */
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
}

#title {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
}



.post {
    /*
        @NOTE using responsive units (vw and vh) here.
        learn more here: https://www.w3schools.com/cssref/css_units.asp
    */
    /* size and colors */
    width: 90vw;
    height: 90vh;
    background-color: #ff9000;
    
    /* CSS box model */
    margin: 0 auto;
    padding: 1%;
    border-radius: 10px;

    /* flexbox */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#all-messages {
    /* size and colors */
    width: 90%;
    height: 70%;
    background-color: #fff;
    color: #000;

    /* CSS box model */
    border-radius: 10px;
    margin: 1%;

    /* visiblity */
    overflow-wrap: normal;
    overflow-y: auto;

    background-image: cover;

}

#typing-container {
    /* size and colors */
    width: 90%;
    height: 10%;
    background-color: var(--accent);
    
    /* CSS box model */
    border-radius: 10px;
    margin: 1%;
    padding: 1%; 

    /* flexbox */
    display: flex;
    justify-content: space-around;
    align-items: center;
}




form input {
    width: 80%;
    height: 80%;

    font-size: 1.2em;
    border-radius: 2px;
}

form label {
    font-size: 1.2em;
}

.input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


#send-btn {
    width: 15%;
    height: 50%;

    background-color: var(--secondary);
    border: none;
    border-radius: 10px;
    color: #fff;

    font-size: 1.2em;
}

#send-btn:hover {
    background-color: var(--primary);
    box-shadow: 2px 2px 2px #4d4d4d;
}

#send-btn:active {
    transform: scale(0.98);
}

.single-message {
    display: block;
}

.single-message p {
    margin: 1%;
}

.single-image {
    background-size: cover;
    width: 200px;
    height: 200px;
}

.single-message-username {
    font-weight: 600;
}

/* drop down button */
.dropbutton {
    background-color: #2980B9;
    color: white;
    width: 80%;
    height: 80%;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  
  .dropcontent {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropcontent a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown a:hover {background-color: #ddd;}
  
  .show {display: block;}
