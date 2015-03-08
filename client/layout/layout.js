Template.layout.curweather = function(){
	Meteor.call('getWeather', function(err, results){
		console.log(results.content);
		Session.set('weather', JSON.parse(results.content).FEEDBACKLIST.SUMMARY.AVERAGE);
	});
	return Session.get('weather');
	
}
Template.layout.numReviews = function (){
	Meteor.call('getReviews', function(err, results){
		Session.set('reviewCount', JSON.parse(results.content).FEEDBACKLIST.SUMMARY.COUNT);
	});
	return Session.get('reviewCount');
}
Template.layout.latest5th = function (){
	Meteor.call('getLatest5thReview', function(err, results){
		Session.set('latest5thReview', JSON.parse(results.content).FEEDBACKLIST.FEEDBACK[0].CUSTOMERCOMMENT);
	});
	return Session.get('latest5thReview');
}
Template.layout.latest4th = function (){
	Meteor.call('getLatest4thReview', function(err, results){
		Session.set('latest4thReview', JSON.parse(results.content).FEEDBACKLIST.FEEDBACK[1].CUSTOMERCOMMENT);
	});
	return Session.get('latest4thReview');
}
Template.layout.latest3rd = function (){
	Meteor.call('getLatest3rdReview', function(err, results){
		Session.set('latest3rdReview', JSON.parse(results.content).FEEDBACKLIST.FEEDBACK[2].CUSTOMERCOMMENT);
	});
	return Session.get('latest3rdReview');
}
Template.layout.latest2nd = function (){
	Meteor.call('getLatest2ndReview', function(err, results){
		Session.set('latest2ndReview', JSON.parse(results.content).FEEDBACKLIST.FEEDBACK[3].CUSTOMERCOMMENT);
	});
	return Session.get('latest2ndReview');
}
Template.layout.latest1st = function (){
	Meteor.call('getLatest1stReview', function(err, results){
		Session.set('latest1stReview', JSON.parse(results.content).FEEDBACKLIST.FEEDBACK[4].CUSTOMERCOMMENT);
	});
	return Session.get('latest1stReview');
}
Template.layout.topGenresChart = function() {
    return {
        chart: {
        	type: 'line',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: "Feefo Ratings"
        },
        xAxis: {
            categories: ['0', '5215', '5216', '5217', '5218', '5219', '5220', '5221', '5223', '5224', '5225', '5226', '5227', '5228']
        },
        series: [{
            name: 'Date',
            data: [0, 20, 86, 86, 85, 85, 85, 86, 86, 86, 86, 86, 86, 86]
        }]
    };
}

// Template.layout.events({
// 	'change .cities': function(evt, tmpl){
// 		Session.set('city', tmpl.find('.cities').value);
// 	}
// });