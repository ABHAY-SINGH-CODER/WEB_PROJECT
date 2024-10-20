function format_changer()
{
  var passwordf=document.getElementById("password");
  if(passwordf.type === "password"){
    passwordf.type="text";
  }
  else{
    passwordf="password";
  }
}

function check()
{
  var password_fix=document.getElementById("password").value;
  var username_fix=document.getElementById("username").value;
  var length=password_fix.length;
  console.log(length);
  if (length < 8 && length!=0) {
    alert("password must contain 8 characters.");
  }
  else if(password_fix.length === 0 || username_fix.length === 0){
    alert("please fill the forum!");
  }
    
  }

  
  const imagePaths = [
    'image2.jpg',
    'image3.jpg'
  ]; 

  let currentIndex = 0;

  function changeBackgroundImage() {
    document.body.style.backgroundImage = `url(${imagePaths[currentIndex]})`;
    currentIndex = (currentIndex + 1) % imagePaths.length; 
  }

  setInterval(changeBackgroundImage, 3000);
  changeBackgroundImage();

  
