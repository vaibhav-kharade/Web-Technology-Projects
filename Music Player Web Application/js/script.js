const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const songSelector = document.getElementById("song-selector");
const audioSource = document.getElementById("audio-source");
const marquee = document.getElementById("marquee");

// Create an array of song URLs
const songs = [
  "/audios/jiva shivachi bail jod.mp3",
  "/audios/देव_मल्हारी_Song_{Lyrical}__Preet_Bandre_(128_kbps)_(Video28.com).mp3",
  "/audios/गावठी_Marathi_movie_songs(128k).m4a",
  "/audios/Yara_Teri_Yari_Ko.mp3",
  "/audios/05_Jivala_Yetay_Baya_-_DJ_Nix(VipMarathi.in).mp3",
  "/audios/01_-_Whistle_Baja_-_DownloadMing.SE_(1).mp3",
  // Add more song URLs as needed
];
let currentSongIndex = 0;

playButton.addEventListener("click", playMusic);
pauseButton.addEventListener("click", pauseMusic);
previousButton.addEventListener("click", playPreviousSong);
nextButton.addEventListener("click", playNextSong);
songSelector.addEventListener("change", changeSong);
audioPlayer.addEventListener("ended", playNextSong);

function playMusic() {
  audioPlayer.play();
  updateSongName();
}

function pauseMusic() {
  audioPlayer.pause();
}

function changeSong() {
  const selectedSong = songSelector.value;
  audioSource.src = selectedSong;
  audioPlayer.load(); // Reload the audio element with the new source
  audioPlayer.play(); // Automatically start playing the new song
  updateSongName();
}

function playPreviousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  audioSource.src = songs[currentSongIndex];
  audioPlayer.load();
  audioPlayer.play();
  updateSongName();
}

function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  audioSource.src = songs[currentSongIndex];
  audioPlayer.load();
  audioPlayer.play();
  updateSongName();
}

function updateSongName() {
  const selectedOption = songSelector.options[songSelector.selectedIndex];
  const songName = selectedOption.textContent;
  marquee.textContent = songName;
}

// Initial update of the song name
updateSongName();

/*
Project Introduction: Music Player Web Application

The Music Player Web Application is a user-friendly and responsive digital music player that allows users to enjoy their favorite songs with ease. This web-based application provides an intuitive interface for playing, pausing, skipping tracks, and selecting songs from a playlist. Whether you're on a desktop computer, tablet, or mobile device, this music player adapts to your screen size for a seamless listening experience.

Key Features:

Audio Playback: Users can play, pause, and control the volume of their selected songs with the integrated audio player.

Song Selection: A dropdown menu lets users choose songs from a playlist. Simply select a song, and it will start playing instantly.

Next and Previous Controls: Easily navigate through your playlist with the next and previous buttons. When a song ends, the next one automatically begins.

Song Name Display: The currently playing song is prominently displayed at the top of the interface with a scrolling marquee, ensuring you always know what's playing.

Responsive Design: The web application is designed to adapt to different screen sizes. Whether you're using a desktop computer, tablet, or smartphone, the music player provides an optimal user experience.

How It Works:

Select a Song: Users can choose a song from the dropdown list, and the selected song will start playing immediately.

Control Playback: Control buttons for play, pause, next, and previous actions make it easy to manage your music.

Automatic Playback: When one song ends, the music player automatically transitions to the next song in the playlist.

Responsive Design: The application's layout and button sizes adjust based on the device's screen size, ensuring a consistent and enjoyable experience on various devices.

Technology Stack:

Front-end: HTML, CSS, JavaScript
Audio Playback: HTML5 Audio Element
Styling: CSS for responsive design and visual appeal
Interactivity: JavaScript for adding functionality and responsiveness
Project Purpose:

The Music Player Web Application is designed for music enthusiasts who want a straightforward and visually pleasing way to enjoy their music collections. Whether you have a carefully curated playlist or want to explore new tracks, this application offers an accessible and user-friendly platform for listening to music on any device.

Whether you're relaxing at home, working, or on the go, this music player is your companion for an immersive audio experience. Simply select your favorite song, hit play, and let the music transport you. Enjoy your music library with ease and style using the Music Player Web Application.

*/







/*
Objective:
The objective of this code is to create a responsive web-based music player application that allows users to play and control audio tracks. It should provide an intuitive user interface with features such as play, pause, next, previous, and song selection.

Description:
The code creates a web application for a music player with the following components:

HTML Structure: The HTML file defines the structure of the music player application. It includes an audio player, buttons for control (play, pause, next, previous), a dropdown for song selection, and a song name display using the <marquee> tag.

CSS Styling: CSS is used for styling the elements in the web application. It includes styling for the container, buttons, and responsiveness for different screen sizes using media queries.

JavaScript Logic: JavaScript is used for adding interactivity to the application. It handles actions such as playing, pausing, changing songs, and updating the displayed song name.

Features:

Responsive Design: The application is designed to be responsive, adjusting its layout and button sizes for different screen sizes. This ensures a good user experience on various devices, including desktops, tablets, and mobile phones.

Audio Playback: Users can play and pause audio tracks using the play and pause buttons. The audio element provides the necessary controls for audio playback.

Song Selection: Users can choose a song from the dropdown list, and the selected song will play automatically.

Next and Previous Controls: Users can skip to the next or previous song using the next and previous buttons. When the current song ends, the next song automatically starts.

Song Name Display: The name of the currently playing song is displayed in a scrolling marquee at the top of the application.

Hover Effects: When users hover over the music player container, it displays a subtle box-shadow effect to provide visual feedback.

Tools Used:

HTML: For defining the structure of the web page.
CSS: For styling the web page and making it responsive.
JavaScript: For adding interactivity to the music player.
Audio Element: Used to embed and control audio playback.
<marquee> Tag: Used to create a scrolling effect for the song name.
Features Explanation:

Responsive Design: Media queries in CSS adjust the layout and button sizes for different screen sizes. For example, on smaller screens, the buttons have smaller fonts to fit the limited space.

Audio Playback: JavaScript functions (playMusic and pauseMusic) control the playback of audio when users click the play and pause buttons.

Song Selection: The <select> element allows users to choose a song. JavaScript (changeSong function) dynamically changes the audio source and plays the selected song.

Next and Previous Controls: JavaScript (playNextSong and playPreviousSong functions) handle the logic for playing the next or previous song in the playlist.

Song Name Display: The song name is displayed using a <marquee> element with scrolling behavior, providing visibility of the currently playing song.

Hover Effects: CSS styling provides a box-shadow effect when users hover over the music player container, enhancing the user interface.

Overall, this code creates a functional and responsive music player web application with user-friendly features for audio playback and control. It uses HTML, CSS, and JavaScript to achieve these objectives.

*/


/*
Project Introduction: Music Player Web Application

The Music Player Web Application is a user-friendly and responsive digital music player that allows users to enjoy their favorite songs with ease. This web-based application provides an intuitive interface for playing, pausing, skipping tracks, and selecting songs from a playlist. Whether you're on a desktop computer, tablet, or mobile device, this music player adapts to your screen size for a seamless listening experience.

Key Features:

Audio Playback: Users can play, pause, and control the volume of their selected songs with the integrated audio player.

Song Selection: A dropdown menu lets users choose songs from a playlist. Simply select a song, and it will start playing instantly.

Next and Previous Controls: Easily navigate through your playlist with the next and previous buttons. When a song ends, the next one automatically begins.

Song Name Display: The currently playing song is prominently displayed at the top of the interface with a scrolling marquee, ensuring you always know what's playing.

Responsive Design: The web application is designed to adapt to different screen sizes. Whether you're using a desktop computer, tablet, or smartphone, the music player provides an optimal user experience.

How It Works:

Select a Song: Users can choose a song from the dropdown list, and the selected song will start playing immediately.

Control Playback: Control buttons for play, pause, next, and previous actions make it easy to manage your music.

Automatic Playback: When one song ends, the music player automatically transitions to the next song in the playlist.

Responsive Design: The application's layout and button sizes adjust based on the device's screen size, ensuring a consistent and enjoyable experience on various devices.

Technology Stack:

Front-end: HTML, CSS, JavaScript
Audio Playback: HTML5 Audio Element
Styling: CSS for responsive design and visual appeal
Interactivity: JavaScript for adding functionality and responsiveness
Project Purpose:

The Music Player Web Application is designed for music enthusiasts who want a straightforward and visually pleasing way to enjoy their music collections. Whether you have a carefully curated playlist or want to explore new tracks, this application offers an accessible and user-friendly platform for listening to music on any device.

Whether you're relaxing at home, working, or on the go, this music player is your companion for an immersive audio experience. Simply select your favorite song, hit play, and let the music transport you. Enjoy your music library with ease and style using the Music Player Web Application.
*/