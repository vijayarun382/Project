$(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel({interval: 3000});
  });
  function myFunction() {
    location.replace("https://www.w3schools.com")
  }
  function checkPassword(form) { 
    password1 = form.password1.value; 
    password2 = form.password2.value; 

    // If password not entered 
    if (password1 == '') 
        alert ("Please enter Password"); 
          
    // If confirm password not entered 
    else if (password2 == '') 
        alert ("Please enter confirm password"); 
          
    // If Not same return False.     
    else if (password1 != password2) { 
        alert ("\nPassword did not match: Please try again...") 
        return false; 
    } 
    
} 