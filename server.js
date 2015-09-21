var express = require('express');
var deeplink = require('node-deeplink')
 
var app = express();
 
app.get('/toefl', deeplink({ 
    fallback: 'https://zinkerz.com/toefl',
    android_package_name: 'com.zinkerz.zinkerztoefl', 
    ios_store_link: 'https://itunes.apple.com/us/app/zinkerz-toefl-full-practice/id1014499280?ls=1&mt=8'
}));

app.get('/sat', deeplink({ 
    fallback: 'http://zinkerz.com/sat',
    android_package_name: 'com.zinkerz.zinkerzsat', 
    ios_store_link: 'https://itunes.apple.com/us/app/zinkerz-sat-full-practice/id955488739?ls=1&mt=8'
}));

// app.get('/test', function(request,response){
// 	console.log("Working...");
// 	response.send('Hello');
// });

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});