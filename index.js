document.addEventListener("DOMContentLoaded", function() {
   updateText();
});
  // Your code goes here

  function updateText(){
    const x = document.getElementById('text')
    // console.log(x)
    x.textContent = "This is really cool!";
  }