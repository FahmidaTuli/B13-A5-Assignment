document.getElementById("signin-btn").addEventListener("click", function(){
   const usernameInput = document.getElementById("input-username");
   const username = usernameInput.value; 

   const inputPassword = document.getElementById("input-password");
   const password = inputPassword.value; 
   
   if(username=="admin" && password=="admin123"){
    // window.location.replace("/home.html")
    window.location.assign("/home.html")
    }else{
    alert("signin failed");
    return;
   }
   
})