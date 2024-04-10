var weather = require('weather-js');

weather.find({search: 'Valence, 26', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);

    console.log(JSON.stringify(result, null, 2));
    console.log(res);
});