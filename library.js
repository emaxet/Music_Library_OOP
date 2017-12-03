const Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  this.tracks = [];
}

Library.prototype.addPlaylist = function(name) {
  const newPlaylist = {
    'name': name,
    'tracks': [],
    averageRating: function() {
      let sum = 0;
      this.tracks.forEach((track) => {
        sum += track.rating;
      });
      return sum/this.tracks.length;
    },
    overallDuration: function() {
      sum = 0;
      this.tracks.forEach((track) => {
        sum += track.length;
      });
      return sum;
    }
  }
  this.playlists.push(newPlaylist);
};

Library.prototype.addTrack = function(title, rating, length) {
  newTrack = {
    'title': title,
    'rating': rating,
    'length': length
  }
  this.tracks.push(newTrack);
};

Library.prototype.addTrackToPlaylist = function(playlist, title, rating, length) {
  newTrack = {
    'title': title,
    'rating': rating,
    'length': length
  }
  this.playlists.forEach((pl) => {
    console.log(pl.name, playlist);
    if (pl.name === playlist) {
      pl.tracks.push(newTrack);
    }
  });
};
