require('dotenv').config();

let Twit = require('twit');

let T = new Twit({
  consumer_key:  process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
}); 

var params = {
  q: 'from:SenAlexander OR from:SenatorCantwell patient',
  count: 10
}

T.get('search/tweets', params, searchedData); 

function searchedData(err, data, response) {

  console.log(data);

} 