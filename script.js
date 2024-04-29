// Define API endpoint
const apiUrl = 'https://api.lyrics.ovh';

// Function to fetch lyrics based on artist and song name
async function fetchLyrics(artist, song) {
  try {
    const response = await fetch(`${apiUrl}/v1/${artist}/${song}`);
    const data = await response.json();
    console.log(data)
    return data.lyrics;
  } catch (error) {
    console.error('Error fetching lyrics:', error);
    return 'Lyrics not found.';
  }
}

// Function to display lyrics
function displayLyrics(lyrics) {
  const lyricsContainer = document.getElementById('lyrics-container');
  lyricsContainer.innerHTML = lyrics;
}

// Event listener for form submission
document.getElementById('lyrics-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  // Get input values
  const artist = document.getElementById('artist').value;
  const song = document.getElementById('song').value;

  // Fetch lyrics
  const lyrics = await fetchLyrics(artist, song);

  // Display lyrics
  displayLyrics(lyrics);
});
