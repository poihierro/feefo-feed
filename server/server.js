var feefoFeed = 'http://www.feefo.com/feefo/xmlfeed.jsp?logon=www.aaetravel.com/SG&json=true';
Meteor.methods({
	getFeefoFeed: function(){
		return Meteor.http.call('GET',feefoFeed);
	},
	getReviews: function(){
		return Meteor.http.call('GET',feefoFeed);
	},
	getLatest5thReview: function(){
		return Meteor.http.call('GET',feefoFeed);
	},
	getLatest4thReview: function(){
		return Meteor.http.call('GET',feefoFeed);
	},
	getLatest3rdReview: function(){
		return Meteor.http.call('GET',feefoFeed);
	},
	getLatest2ndReview: function(){
		return Meteor.http.call('GET',feefoFeed);
	},
	getLatest1stReview: function(){
		return Meteor.http.call('GET',feefoFeed);
	}
});