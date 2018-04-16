import React from 'react';

export default class Footer extends React.Component {

  displayName: 'Footer.jsx'

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="footer">
        <div className="wrap">
          built with <a href="https://github.com/martindale/burnchart">burnchart</a>
        </div>
      </div>
    );
  }

}
