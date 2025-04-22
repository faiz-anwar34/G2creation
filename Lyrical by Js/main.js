const lyrics = [
    "Sanson Ki Mala Pe",
    "Simroon Main Pee Ka Naam", //x2
    "Sanson Ki Mala Pe",
    "Simroon Main Pee Ka Naam..",

    "Prem Ke Raang Mein Aisi Doobi",
    "Ban Gaya Ek Hi Roop",
    "Prem Ke Raang Mein Aisi Doobi",
    "Ban Gaya Ek Hi Roop",

    "Prem Ki Mala Japte Japte",
    "Aap Bani Main Shaam",

    "Sanson Ki Mala Pe...",
    "Simroon Main Pee Ka Naam"
];

// Timing configuration for each line (in milliseconds)
const timings = [
    3000, // "Sanson Ki Mala Pe"
    1600, // "Simroon Main Pi Ka Naam"
    3000, // "Sanson Ki Mala Pe"
    2000, // "Simroon Main Pi Ka Naam"

    5000, // "Prem Ke Raang Mein Aisi Doobi"
    3800, // "Ban Gaya Ek Hi Roop"
    3000, // "Prem Ke Raang Mein Aisi Doobi"
    2500, // "Ban Gaya Ek Hi Roop"

    2000, // "Prem Ki Mala Japte Japte"
    2000, // "Aap Bani Main Shaam"

    2800, // "Sanson Ki Mal...a Pe..."
    4000  // "Simroon Main Pi Ka Naam"
];

// Sentence-specific delays (time between sentences)
const sentenceDelays = [
    500, // Delay after "Sanson Ki Mala Pe"
    3000, // Delay after "Simroon Main Pi Ka Naam"
    700, // Delay after "Sanson Ki Mala Pe"
    4600, // Delay after "Simroon Main Pi Ka Naam"

    1000, // Delay after "Prem Ke Raang Mein Aisi Doobi"
    800, // Delay after "Ban Gaya Ek Hi Roop"
    1400, // Delay after "Prem Ke Raang Mein Aisi Doobi"
    1600, // Delay after "Ban Gaya Ek Hi Roop"

    1000, // Delay after "Prem Ki Mala Japte Japte"
    1000, // Delay after "Aap Bani Main Shaam"

    900, // Delay after "Sanson Ki Mal...a Pe..."
    1500  // Delay after "Simroon Main Pi Ka Naam"
];

// Word-specific delays for each sentence (in milliseconds)
const wordDelays = [
    [0, 500, 1000, 1500], // Delays for "Sanson Ki Mala Pe"
    [0, 500, 1000, 1500, 2000],   // Delays for "Simroon Main Pi Ka Naam"
    [0, 500, 1000, 1500],  // Delays for "Sanson Ki Mala Pe"
    [0, 500, 1000, 1500, 2000],   // Delays for "Simroon Main Pi Ka Naam"
    [0, 700, 1300, 2100, 3600, 4000], // Delays for "Prem Ke Raang Mein Aisi Doobi"
    [0, 600, 1000, 1400, 1600], // Delays for "Ban Gaya Ek Hi Roop"
    [0, 500, 1000, 1300, 2700, 2900], // Delays for "Prem Ke Raang Mein Aisi Doobi"
    [0, 400, 800, 1200, 1500],  // Delays for "Ban Gaya Ek Hi Roop"
    [0, 400, 800, 1200, 1600], // Delays for "Prem Ki Mala Japte Japte"
    [0, 400, 800, 1300], // Delays for "Aap Bani Main Shaam"
    [0, 500, 1000, 1500], // Delays for "Sanson Ki Mal...a Pe..."
    [0, 500, 900, 1300, 1600]  // Delays for "Simroon Main Pi Ka Naam"
];

const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");
const videoContainer = document.getElementById("video-container");
const backgroundMusic = document.getElementById("backgroundMusic");
const backgroundVideo = document.getElementById("backgroundVideo");
const lyricsElement = document.getElementById("lyrics");

let currentLine = 0;
let isPlaying = false;


// Function to start the video, music, and lyrics
function startApp() {
    // Add a fade-out effect to the start screen
    startScreen.style.transition = "opacity 0.5s ease";
    startScreen.style.opacity = "0";

    // Wait for the fade-out to complete before hiding the start screen
    setTimeout(() => {
        startScreen.style.display = "none";

        // Show the video and lyrics container
        videoContainer.style.display = "block";

        // Play the video and music
        backgroundVideo.play();
        backgroundMusic.play();

        // Start displaying lyrics
        displayLyrics();
    }, 500); // Match the transition duration
}

// Function to start displaying lyrics
function startLyrics(sentence, duration, customWordDelays = []) {
    const words = sentence.split(" ");
    lyricsElement.innerHTML = ""; // Clear previous content

    // Use custom delays if provided, otherwise calculate base delays
    const baseWordDelay = duration / words.length;
    const wordDelaysToUse = customWordDelays.length
        ? customWordDelays
        : words.map((_, index) => baseWordDelay * index); // Default delays

    words.forEach((word, index) => {
        let span = document.createElement("span");
        span.className = "word";
        span.innerText = word + " ";
        span.style.opacity = 0; // Initially hidden
        span.style.transition = "opacity 1s ease-in-out"; // Smooth fade-in
        lyricsElement.appendChild(span);

        setTimeout(() => {
            span.style.opacity = 1; // Fade-in effect
        }, wordDelaysToUse[index]); // Use custom or calculated delay for each word
    });
}

// Function to display lyrics
function displayLyrics() {
    if (currentLine < lyrics.length) {
        const lineDuration = timings[currentLine]; // Get duration for the current line
        const sentenceDelay = sentenceDelays[currentLine] || 1000; // Default delay if not specified

        // Pass the specific word delays for the current line
        startLyrics(lyrics[currentLine], lineDuration, wordDelays[currentLine]);

        setTimeout(() => {
            currentLine++;
            setTimeout(() => {
                displayLyrics(); // Move to the next line after the specified delay
            }, sentenceDelay); // Add sentence-specific delay
        }, lineDuration); // Wait for the line to finish
    }
}

// Function to display the "Thank You" message
function showThankYouMessage() {
    // Create a thank you message container
    const thankYouMessage = document.createElement("div");
    thankYouMessage.id = "thankYouMessage";
    thankYouMessage.innerText = "Thank you for watching!";
    document.body.appendChild(thankYouMessage);

    // Style the thank you message
    thankYouMessage.style.position = "fixed";
    thankYouMessage.style.top = "50%";
    thankYouMessage.style.left = "50%";
    thankYouMessage.style.transform = "translate(-50%, -50%)";
    thankYouMessage.style.fontSize = "2rem";
    thankYouMessage.style.color = "white";
    thankYouMessage.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    thankYouMessage.style.padding = "20px 40px";
    thankYouMessage.style.borderRadius = "10px";
    thankYouMessage.style.textAlign = "center";
    thankYouMessage.style.zIndex = "5";

    // Fade in the message
    thankYouMessage.style.opacity = "0";
    thankYouMessage.style.transition = "opacity 1s ease";
    setTimeout(() => {
        thankYouMessage.style.opacity = "1";
    }, 100);

    // Optionally, remove the message after a few seconds
    setTimeout(() => {
        thankYouMessage.style.opacity = "0";
        setTimeout(() => {
            thankYouMessage.remove();
        }, 1000); // Match the fade-out duration
    }, 5000); // Display the message for 5 seconds
}

// Attach an event listener to the video to detect when it ends
backgroundVideo.addEventListener("ended", showThankYouMessage);

// Attach event listener to the start button
startButton.addEventListener("click", startApp);