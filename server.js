var express = require('express');
var deeplink = require('node-deeplink')
 
var app = express();

var extend = function extend(target) {
    var sources = [].slice.call(arguments, 1);
    sources.forEach(function (source) {
        for (var prop in source) {
            target[prop] = source[prop];
        }
    });
    return target;
}

var sat_options = { 
    fallback: 'http://zinkerz.com/sat',
    android_package_name: 'com.zinkerz.zinkerzsat', 
    ios_store_link: 'https://itunes.apple.com/us/app/zinkerz-sat-full-practice/id955488739?ls=1&mt=8'
}

var toefl_options = { 
    fallback: 'http://zinkerz.com/toefl',
    android_package_name: 'com.zinkerz.zinkerztoefl', 
    ios_store_link: 'https://itunes.apple.com/us/app/zinkerz-toefl-full-practice/id1014499280?ls=1&mt=8'
}

var sat_purhcase_options = extend(sat_options,{title: 'purchase'});
var toefl_purchase_options = extend(toefl_options, {title: 'purchase'});

app.get('/toefl/purchase', deeplink(toefl_purchase_options));
app.get('/toefl', deeplink(toefl_options));

app.get('/sat/purchase', deeplink(sat_purhcase_options));
app.get('/sat', deeplink(sat_options));

app.get('/*', function (req, res, next) {
		//console.log('all');
		res.redirect('http://zinkerz.com');
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});