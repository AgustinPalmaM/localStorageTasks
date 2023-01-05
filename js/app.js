// variables
const form = document.getElementById('formulario');
const tweetList = document.getElementById('lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
  // when the user add a new tweet
  form.addEventListener( 'submit', addTweet );
  // when the document is ready
  document.addEventListener('DOMContentLoaded', () => {
    tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    console.log(tweets)

    addHtml()
  })
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
      // add a belete button to remove each tweet
      const deleteButton = document.createElement('A');
      deleteButton.classList.add('borrar-tweet');
      deleteButton.innerText = 'X';

      deleteButton.onclick = () => {
        deleteTweet(tweet.id);
      };

      const li = document.createElement('LI');
      li.innerText = tweet.tweet;

      // add deleteButton to the li element
      li.appendChild(deleteButton);

      tweetList.appendChild(li);
    })

  }

  synchroLocalStorage();

}

// Add actual tweets to the local storage

function synchroLocalStorage() {
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

// delete an specific tweet

function deleteTweet(id) {
  tweets = tweets.filter( tweet => tweet.id !== id );
  console.log(tweets)
  addHtml()
}

// Clean the html to prevent duplicate previous tweets with actual tweets

function cleanHtml() {
  
  while(tweetList.firstChild) {
    tweetList.firstChild.remove()
  }
}
