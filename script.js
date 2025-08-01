document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

     const username = document.getElementById("username").value.trim();
     const email = document.getElementById("email").value.trim();

     const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];
       
    if(username.length < 3){
        isValid = false;
       messages.push("❌ Please enter  valid username");
    }else{
          
       messages.push("✔️ You enter valid username");  }
      
     if (!(email.includes('@') && email.includes('.'))) {
      isValid = false;
       messages.push("❌ Please enter a valid email");
     } else {
       messages.push("✔️ You entered a valid email");
     }
     if(password.length < 8){
       isValid = false;
         messages.push("❌ Please enter  valid password");
     }else{
        
      messages.push("✔️ You enter valid password");   }
     
     feedbackDiv.style.display = "block";

     if(isValid){
        feedbackDiv.textContent = "Registration successful!";
         feedbackDiv.style.color = "#28a745";
         form.onsubmit();
     }else{
         feedbackDiv.innerHTML = messages.join("<br>");
           feedbackDiv.style.color =  "#dc3545";
     }
     
     })
});
    