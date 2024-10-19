const images = [
    'image2.jpg',
    'image3.jpg'
  ];
  
  let index = 0;
  
  function changeBackground() {
    const background = document.getElementById('background');
    index = (index + 1) % images.length; // Loop through images
    background.style.backgroundImage = `url(${images[index]})`;
  }
  
  setInterval(changeBackground, 5000); // Change every 5 seconds
  
  
    function toggleInputType() {
      var inputElement = document.getElementById("password");
      
          if (inputElement.type === "password") {
        inputElement.type = "text"; 
          } else {
        inputElement.type = "password"; 
          }
    }
  