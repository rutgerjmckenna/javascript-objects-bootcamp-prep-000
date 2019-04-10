var playlist = {
  artist: song
}

function newPlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
  }
function updatePlaylist(playlist, artist, song) {
  playlist.beatles = 'lucy'
  return playlist
}