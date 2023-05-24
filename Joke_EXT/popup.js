// Fetch joke function
function fetchJoke() {
    fetch('https://icanhazdadjoke.com/slack')
        .then(data => data.json())
        .then(jokeData => {
            const jokeText = jokeData.attachments[0].text;
            const jokeElement = document.getElementById('jokeElement');
            jokeElement.innerHTML = jokeText;
        });
}

// Initial joke fetch
fetchJoke();

// Add event listener to refresh button
const refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', fetchJoke);
