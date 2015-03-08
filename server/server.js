Meteor.methods({
	getWeather: function(){
		//return Meteor.http.call('GET','http://api.openweathermap.org/data/2.5/weather?q=' + city);
		return Meteor.http.call('GET','http://www.feefo.com/feefo/xmlfeed.jsp?logon=www.aaetravel.com/SG&json=true');
	},
	getReviews: function(){
		//return Meteor.http.call('GET','http://api.openweathermap.org/data/2.5/weather?q=' + city);
		return Meteor.http.call('GET','http://www.feefo.com/feefo/xmlfeed.jsp?logon=www.aaetravel.com/SG&json=true');
	},
	getLatest5thReview: function(){
		//return Meteor.http.call('GET','http://api.openweathermap.org/data/2.5/weather?q=' + city);
		return Meteor.http.call('GET','http://www.feefo.com/feefo/xmlfeed.jsp?logon=www.aaetravel.com/SG&json=true');
	},
	getLatest4thReview: function(){
		//return Meteor.http.call('GET','http://api.openweathermap.org/data/2.5/weather?q=' + city);
		return Meteor.http.call('GET','http://www.feefo.com/feefo/xmlfeed.jsp?logon=www.aaetravel.com/SG&json=true');
	},
	getLatest3rdReview: function(){
		//return Meteor.http.call('GET','http://api.openweathermap.org/data/2.5/weather?q=' + city);
		return Meteor.http.call('GET','http://www.feefo.com/feefo/xmlfeed.jsp?logon=www.aaetravel.com/SG&json=true');
	},
	getLatest2ndReview: function(){
		//return Meteor.http.call('GET','http://api.openweathermap.org/data/2.5/weather?q=' + city);
		return Meteor.http.call('GET','http://www.feefo.com/feefo/xmlfeed.jsp?logon=www.aaetravel.com/SG&json=true');
	},
	getLatest1stReview: function(){
		//return Meteor.http.call('GET','http://api.openweathermap.org/data/2.5/weather?q=' + city);
		return Meteor.http.call('GET','http://www.feefo.com/feefo/xmlfeed.jsp?logon=www.aaetravel.com/SG&json=true');
	}
});