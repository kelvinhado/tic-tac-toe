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
			var oldValue = current.state.bValue;
			var newValue;
			if(oldValue === 'X'){
				newValue = 'O';
			}
			else{
				newValue='X';
			}
			current.setState({bValue:newValue});
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
