$('document').ready(function() {
  var gamertags = ['JohnLocke15', 'Yemen3', 'StizNewton', 'TheDailyDriver', 'Monohloco', 'iCellyHard17'];
      row = '';

  $.each(gamertags, function(index, gamertag) {
    $.getJSON('https://api.r6stats.com/api/v1/players/' + gamertag + '?platform=xone', function(data) {
        row += '<tr><td>' + data.player.username + '</td><td>' + data.player.stats.ranked.kd + '</td><td>' + data.player.stats.ranked.wlr + '</td><td>' + data.player.stats.progression.level + '</td><td>' + data.player.stats.ranked.kills + '</td><td>' + data.player.stats.ranked.deaths + '</td><td>' + data.player.stats.ranked.wins + '</td><td>' + data.player.stats.ranked.losses + '</td></tr>';
        $('.stats').html(row);
      });
  });
});