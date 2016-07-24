// Example album
var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
    { title: 'Blue', duration: '4:26' },
    { title: 'Green', duration: '3:14' },
    { title: 'Red', duration: '5:01' },
    { title: 'Pink', duration: '3:21' },
    { title: 'Magenta', duration: '2:15' }
  ]
};

// Another Example album
var albumMarconi = {
  title: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: 'assets/images/album_covers/20.png',
  songs: [
    { title: 'Hello, Operator?', duration: '1:01' },
    { title: 'Ring, ring, ring', duration: '5:01' },
    { title: 'Fits in your pocket', duration: '3:21' },
    { title: 'Can you hear me now?', duration: '3:14' },
    { title: 'Wrong phone number', duration: '2:15' }
  ]
};

// Third, very special album
var albumSpecial = {
  title: 'Swearing Behind the Wheel',
  artist: 'The Bastard Kazoos',
  label: '7k4 Carolave Records',
  year: '2016',
  albumArtUrl: 'assets/images/album_covers/02.png',
  songs: [
    { title: 'Gimmie all your cans', duration: '2:33' },
    { title: 'There is always time for a song', duration: '5:03' },
    { title: 'Mac Attak', duration: '2:14' },
    { title: 'Litterbox blues', duration: '4:12' },
    { title: 'Happy Meal on Layaway', duration: '1:23' },
    { title: 'Foo Dhousand Blixteen', duration: '20:16' }
  ]
};

var createSongRow = function(songNumber, songName, songLength) {
  var template =
      '<tr class="album-view-song-item">'
    + ' <td class="song-item-number">' + songNumber + '</td>'
    + ' <td class="song-item-title">' + songName + '</td>'
    + ' <td class="song-item-duration">' + songLength + '</td>'
    + '</tr>';

  return template;
};

var setCurrentAlbum = function(album) {
  var albumTitle = document.getElementsByClassName('album-view-title')[0];
  var albumArtist = document.getElementsByClassName('album-view-artist')[0];
  var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
  var albumImage = document.getElementsByClassName('album-cover-art')[0];
  var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

  albumTitle.firstChild.nodeValue = album.title;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);

  albumSongList.innerHTML = '';

  for (var i = 0; i < album.songs.length; i++) {
    albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
  };
};

var getCurrentAlbum = function() {
  return document.getElementsByClassName('album-view-artist')[0].textContent;
};

window.onload = function() {
  setCurrentAlbum(albumSpecial);

  // first img is the logo, 2nd is the album cover.
  document.getElementsByTagName('img')[1].addEventListener('click', function() {
    // Cycle between 3 different albums
    if (getCurrentAlbum() === "The Bastard Kazoos") {
      setCurrentAlbum(albumPicasso);
    } else if (getCurrentAlbum() === "Pablo Picasso") {
      setCurrentAlbum(albumMarconi);
    } else {
      setCurrentAlbum(albumSpecial);
    };
  });
};
