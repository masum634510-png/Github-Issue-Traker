/* login page */
 const userInput = document.getElementById("userNameBtn");
 const passwordInput = document.getElementById("passwordBtn");
 const singInButton = document.getElementById("singInBtn");
 
singInButton.addEventListener("click", () => {
   const userValue = userInput.value;
   const passValue = passwordInput.value;
   if(userValue == "admin" && passValue == "admin123"){
    alert("Login Successfully");
    window.location.href = "home.html";
   }
   else{
    alert("Login Failed")
    return;
   };

 });
 