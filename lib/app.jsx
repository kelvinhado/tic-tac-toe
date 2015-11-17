'use strict';

var React = require('react');

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
      <button>{this.props.bValue}</button>
    );
  }
});

// here we ask React to add the component Box into the body
React.render(<Box bValue='Y'/>, document.body);
