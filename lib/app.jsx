'use strict';

var React = require('react');

// CSS styl efor the button
var buttonStyle = {
   'height': '100px',
   'width': '100px'
};

var Box = React.createClass({

   getInitialState: function() {
   return {bValue: this.props.initialbValue};
 },
  'render': function onRender () {
    return (
      <button style={buttonStyle}>{this.state.bValue}</button>
    );
  }
});

// here we ask React to add the component Box into the body
React.render(<Box initialbValue='X'/>, document.body);
