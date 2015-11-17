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

  handleClick: function() {
 		var current = this;
 		var oldValue = current.state.bValue;
 		var newValue = oldValue === 'X' ? 'O' : 'X';
 		current.setState({ bValue:newValue});
 	  },


  'render': function onRender () {
    return (
      <button style={buttonStyle} onClick={this.handleClick}>{this.state.bValue}</button>
    );
  }
});

// here we ask React to add the component Box into the body
React.render(<Box initialbValue='X'/>, document.body);
