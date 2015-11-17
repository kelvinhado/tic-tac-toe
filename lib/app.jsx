'use strict';

var React = require('react');

// CSS styl efor the button
var buttonStyle = {
   'height': '100px',
   'width': '100px'
};

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
      <button style={buttonStyle}>{this.props.bValue}</button>
    );
  }
});

// here we ask React to add the component Box into the body
React.render(<Box bValue='Y'/>, document.body);
