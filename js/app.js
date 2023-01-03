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
  
  const tweet = document.getElementById('tweet').value;
  
  if (tweet === '') {
    return showErrorMessage('Your tweet can not be blank');
    
    
  }

  const tweetObject = {
    id: Date.now(),
    tweet
  }

  // add tweet to the tweets array

  tweets = [...tweets, tweetObject];

  // Add the html content with all tweets
  
  addHtml();

  // Clean form

  form.reset()

}

function showErrorMessage(error) {
  const errorMessage = document.createElement('P');
  errorMessage.textContent = error;
  errorMessage.classList.add('error');

  const content = document.getElementById('contenido');
  
  if (content.lastElementChild.classList.value !== 'error') {

    content.appendChild(errorMessage);
  }
  
  
  setTimeout(() => {
    errorMessage.remove();
  }, 1500)
}

// Show list of tweets

function addHtml() {
  cleanHtml()
  if(tweets.length > 0) {

    tweets.forEach((tweet) => {
      
      const li = document.createElement('LI');
      li.innerText = tweet.tweet;

      tweetList.appendChild(li);
    })

  }

}

function cleanHtml() {
  
  while(tweetList.firstChild) {
    tweetList.firstChild.remove()
  }
}