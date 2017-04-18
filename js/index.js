

$('document').ready(function() {
    var gamertags = ['JohnLocke15', 'Yemen3', 'StizNewton', 'TheDailyDriver', 'Monohloco', 'iCellyHard17', 'nj patriot83'];
        row = '';

    $.when(makeTables()).done(function(doIt) {
            $("#myTable").tablesorter();
    });

    function makeTables() {
        return $.each(gamertags, function(index, gamertag) {
            $.getJSON('https://api.r6stats.com/api/v1/players/' + gamertag + '?platform=xone', function(data) {
                row += '<tr><td>' + data.player.username + '</td><td>' + data.player.stats.ranked.kd + '</td><td>' + ((data.player.stats.ranked.wins / (data.player.stats.ranked.wins + data.player.stats.ranked.losses)) * 100).toFixed(2) + '</td><td>' + data.player.stats.progression.level + '</td><td>' + data.player.stats.ranked.kills + '</td><td>' + data.player.stats.ranked.deaths + '</td><td>' + data.player.stats.ranked.wins + '</td><td>' + data.player.stats.ranked.losses + '</td></tr>';
                $('.stats').html(row);
                console.log((((index + 1) / gamertags.length) * 100) + '% Complete')
            });
        });
    }

    $("#myTable").tablesorter();
});

    // $("#myTable").trigger("update");
    // var sorting = [[0,0]];
    // $("#myTable").trigger("sorton",[sorting]);