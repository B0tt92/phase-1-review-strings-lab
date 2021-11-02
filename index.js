// Write your code in this file!
let currentUser = 'Bott bott';
const upperCaseCurrentUser = currentUser.toUpperCase();
const welcomeMessage = `Welcome to Flatbook,   ${currentUser}!`;
let excitedWelcomeMessage = welcomeMessage.toUpperCase();
const firstInitial = currentUser[0];
const restOfName = currentUser.slice(5);
let shortGreeting = `Welcome, ${firstInitial}${restOfName}!`;
console.log(shortGreeting)