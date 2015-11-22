var React = require('react');
var ShoutBack = React.createClass({
    render: function(){
	return(
		<div>
		<h3>Say something</h3>
		<input type="text" ref="shout"/>
		<button type="submit">Submit</button>
		</div>
	)
    }
});

module.exports = ShoutBack;
