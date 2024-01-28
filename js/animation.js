
// Create the welcome message element
const welcomeMessage = document.createElement('div');
welcomeMessage.style.backgroundColor = 'rgba(177, 162, 202, 0.5)';
welcomeMessage.innerHTML = '<h1 style="color: white; font-size: 25px; user-select: none;">Welcome to The website!</h1>';
welcomeMessage.style.width = '100%';
welcomeMessage.style.height = '100%';
welcomeMessage.style.position = 'absolute';
welcomeMessage.style.top = '0';
welcomeMessage.style.left = '0';
welcomeMessage.style.display = 'flex';
welcomeMessage.style.justifyContent = 'center';
welcomeMessage.style.alignItems = 'center';
// Set the initial opacity to 0
welcomeMessage.style.opacity = 0;
// Append the welcome message to the body
document.body.appendChild(welcomeMessage);

// Define the fade in function
function fadeIn() {
  // Get the current opacity
  let opacity = parseFloat(welcomeMessage.style.opacity);
  // Increase the opacity by 0.1
  opacity += 0.1;
  // Set the opacity style
  welcomeMessage.style.opacity = opacity;
  // If the opacity is less than 1, repeat the function
  if (opacity < 1) {
    setTimeout(fadeIn, 50);
  }
}

// Define the fade out function
function fadeOut() {
  // Get the current opacity
  let opacity = parseFloat(welcomeMessage.style.opacity);
  // Decrease the opacity by 0.1
  opacity -= 0.1;
  // Set the opacity style
  welcomeMessage.style.opacity = opacity;
  // If the opacity is greater than 0, repeat the function
  if (opacity > 0) {
    setTimeout(fadeOut, 50);
  } else {
    // Remove the welcome message from the body
    welcomeMessage.remove();
  }
}

// Call the fade in function after 0.5 second
setTimeout(fadeIn, 500);
// Call the fade out function after 3 seconds
setTimeout(fadeOut, 3000);

