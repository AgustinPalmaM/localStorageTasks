// variables
const form = document.getElementById('formulario');
const tweetList = document.getElementById('lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
  form.addEventListener( 'submit', addTweet );
}




// Functions
function addTweet(e) {
  e.preventDefault();
  
  const tweet = document.getElementById('tweet');
  
  if (tweet.value === '') {
    return showErrorMessage('Your tweet can not be blank');
    
    
  }

  console.log('validating')
}

function showErrorMessage(error) {
  const errorMessage = document.createElement('P');
  errorMessage.textContent = error;
  errorMessage.classList.add('error');

  const content = document.getElementById('contenido');
  content.appendChild(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, 1500)
}