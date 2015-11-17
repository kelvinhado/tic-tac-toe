'use strict';

var React = require('react');

// CSS styl efor the button
var buttonStyle = {
   height: 100,
   width: 100
};

var Box = React.createClass({

   	getInitialState: function() {
   		return {bValue: this.props.initialbValue};
 	},
 	componentWillMount: function() {
		var current = this;
	    	this.timer = setInterval(function(){
			var old = current.state.bValue;
			var new;
			if(old === 'X'){
				new = 'O';
			}
			else{
				new='X';
			}
			current.setState({bValue:new});
		},300);
	 },


  'render': function onRender () {
    return (
      <button style={buttonStyle}>{this.state.bValue}</button>
    );
  }
});

// here we ask React to add the component Box into the body
React.render(<Box initialbValue='X'/>, document.body);
