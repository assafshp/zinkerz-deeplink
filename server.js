var express = require('express');
var deeplink = require('node-deeplink')
 
var app = express();
 
app.get('/', deeplink({ 
    fallback: 'http://zinkerz.com',
    android_package_name: 'com.citylifeapps.cups', 
    ios_store_link: 'https://itunes.apple.com/us/app/zinkerz-toefl-full-practice/id1014499280?ls=1&mt=8'
}));

app.get('/deeplink',  function(request,response) {
	deeplink({ 
	    fallback: 'http://zinkerz.com',
	    android_package_name: 'com.citylifeapps.cups', 
	    ios_store_link: 'https://itunes.apple.com/us/app/zinkerz-toefl-full-practice/id1014499280?ls=1&mt=8'
	});
});

app.get('/test', function(request,response){
	console.log("Working...");
	response.send('Hello');
});

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});