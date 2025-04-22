function startLyrics() {
    const lyricsElement = document.getElementById('lyrics');
    const lyrics = [
        "Line 1 of the song",
        "Line 2 of the song",
        "Line 3 of the song",
        "Line 4 of the song",
        "Line 5 of the song"
    ];
    
    let index = 0;

    function displayNextLine() {
        if (index < lyrics.length) {
            lyricsElement.textContent = lyrics[index];
            index++;
            setTimeout(displayNextLine, 2000); // Change line every 2 seconds
        } else {
            lyricsElement.textContent = "End of lyrics.";
        }
    }

    displayNextLine();
}