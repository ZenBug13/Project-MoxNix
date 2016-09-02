var mongoose = require('mongoose');

module.exports = mongoose.model('', {
	name : {type : String, default: ''}
});
