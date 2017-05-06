document.body.style.backgroundColor = "#999999";


var quotes = [
	"Only I can change my life, no one can do it for me. - Carol Burnett",
  "The greatest gift of life is friendship and I have received it. - Hubert Humphrey",
  "There is only one happiness in this life, to love and to be loved - George Sand", 
  "Life is 10% what happens to you and 90% how you react to it - Charles R. Swindoll",
  "Don\'t take life too seriously, you will never get out of it alive - Elbert Hubbard",
  "The good life is the one inspired by love and guided by knowledge - Bertrand Russell",
  "Choose a job you love and you will never have to work a day in your life - Conficus",
  "Life isn\'t about finding yourself, life is about creating yourself - George Bernard Shaw",
  "Live life to the fullest and focus on the positive - Matt Cameron",
  "Be happy for this moment, this moment is your life - Omar Khayyam"
]


var loadquotes = function() {
  var newquotes = quotes[Math.floor(Math.random() * (quotes.length))];
  document.getElementById("quotedisplay").innerHTML = '"' + newquotes + '"';
  $('.twitter-share-button').attr('href', 'https://twitter.com/intent/tweet?text='+newquotes).attr('target', '_blank');
};


var randomColor = function() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var myRGB = "rgb(" + x + "," + y + "," + z + ")";
  
  document.body.style.background = myRGB;
};


var paragraphColor = function() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var ourRGB = "rgb(" + x + "," + y + "," + z + ")";
 document.getElementById("quotedisplay").style.backgroundColor = ourRGB; 
}
document.getElementById("quotedisplay").style.backgroundColor = paragraphColor;










