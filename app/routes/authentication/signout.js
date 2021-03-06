import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({

	beforeModel: function(transition) {
		return ajax({
			type: 'DELETE',
			url: '/' + this.get('session-config.apiNamespace') + '/sessions/me'
		}).then(function(response) {
		    window.location.href = this.get('session-config.baseURL') + 'authentication';
		}.bind(this), function(reason) {
			this.replaceWith('authentication.signout-failed');
		}.bind(this));
	}

});
