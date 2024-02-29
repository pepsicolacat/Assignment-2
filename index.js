var button = document.getElementById('button')
var wheel = document.getElementById('wheel')

// https://stackoverflow.com/questions/57889652/rotate-div-element-with-every-click-on-a-button
button.addEventListener("click", function() {
  var rotations = Math.floor(Math.random() * 5) + 1; // Generate a random number of rotations between 1 and 5
  var randomRotation = rotations * 360; // Convert rotations to degrees
  wheel.style.transform = 'rotate(' + randomRotation + 'deg)';
});