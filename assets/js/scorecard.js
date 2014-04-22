//Kick off Scorecard
$( document ).ready( function() {
	SCRCD.App.initialize();
});

// Scorecard
var SCRCD = SCRCD || {};


SCRCD.App = {
	initialize: function() {

		 
		// ----- Router
		// Create a router to handle page navigation
		SCRCD.appRouter = new SCRCD.Router();

		// Setup history to track pages
		Backbone.history.start();
	}
}


/**********************
		ROUTER
**********************/
SCRCD.Router = Backbone.Router.extend({
	routes: {
		"*path": "defaultpage"
	},
	defaultpage: function(){
		var currentRound = new SCRCD.vCurrentRound();
	}
});


/**********************
		MODELS
**********************/

SCRCD.mRound = Backbone.Model.extend({});



/**********************
	  COLLECTIONS
**********************/

SCRCD.cRoundCollection = Backbone.Collection.extend({
	model: SCRCD.mRound,
	url: 'assets/json/round.json',
	parse: function(response) {
		return response;
	}
});


/**********************
		VIEWS
**********************/

SCRCD.vCurrentRound = Backbone.View.extend({
	el: '#dMainContainer',
	initialize: function() {
		this.render();

	},
	render: function() {
		var round = new SCRCD.cRoundCollection();

		round.fetch({
			success: function (cRoundCollection) {
				console.log(cRoundCollection);
			},
			error: function(response) {
				console.log(response);
			}
		})

	}
});








