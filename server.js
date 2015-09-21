var express = require('express');
var deeplink = require('node-deeplink')
 
var app = express();
 
app.get('/deeplink', deeplink({ 
    fallback: 'https://cupsapp.com',
    android_package_name: 'com.citylifeapps.cups', 
    ios_store_link: 'https://itunes.apple.com/us/app/zinkerz-toefl-full-practice/id1014499280?ls=1&mt=8',
}));