/*
var count = 2;

function validate() {
    var un = document.myform.input.value;
    var pw = document.myform.input1.value;
    var valid = false;

    var unArray = ["shanthini"];
    var pwArray = ["Password1", "Password2", "Password3", "Password4"];

    for (var i=0; i <unArray.length; i++) {
        if ((un == unArray[i]) && (pw == pwArray[i])) {
        valid = true;
            break;
        }
    }

    if (valid) {
        alert ("Login was successful");
        window.location = 'welcome.html';
        return false;
    }

    var t = " tries";

    if (count == 1) {t = " try"}

    if (count >= 1) {
        alert ("Invalid username and/or password. " +
               "You have " + count + t + " left.");
        document.myform.input.value = "";
        document.myform.input1.value = "";
        setTimeout("document.myform.input.focus()", 25);
        setTimeout("document.myform.input1.select()", 25);
        count --;
    }

    else {
        alert ("Still incorrect! You have no more tries left!");
        document.myform.input.value = "No more tries allowed!";
        document.myform.input1.value = "";
        document.myform.input.disabled = true;
        document.myform.input1.disabled = true;
        return false;
    }

}
/*const loginForm = document.getElementById("myform");
const loginButton = document.getElementById("login1");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.input.value;
    const password = loginForm.input.value;

    if (input === "user" && input=== "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})*/

/*<form name = "myform">
  <p>
    ENTER USER NAME <input type="text" name="username">
    ENTER PASSWORD <input type="password" name="pword">
    <input type="button" value="Check In" name="Submit" onclick="validate()">
  </p>
</form>*/

/*var username = document.getElementById("input").value; 
var password = document.getElementById("input1").value;
var storedUsername = 'srishanthini';    
var storedPassword = 'shan'

// Now check if the credentials match what we have stored
if (input == storedUsername && input1 == storedPassword){
  // If the credentials match, redirect the user to the member page
  window.location = "welcome.html";
}
else {
   // Otherwise, alert the user that the credentials don't match what we have stored
   alert("The username and password you entered don't match our records. Please try again."); 
}*/

/*document.getElementById("login1").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input field values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Perform validation checks
    if (username === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Additional validation checks if required
    // ...
  
    // If all checks pass, proceed with login
    alert("Login successful!");
    // You can redirect to another page or perform other actions here
  });
  


var myBtn = document.getElementById('login1');
myBtn.addEventListener('click',function(event){
    window.location.href="welcome.html";
});
var btn = '#login1';
$(btn).click(function(){
    window.location.href="welcome.html";
});