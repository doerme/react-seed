import React from 'react';

//let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
        <div>
	        {this.props.children}
        </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
