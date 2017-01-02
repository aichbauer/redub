import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

require('../../../scss/style.scss');


class App extends Component {

  render() {

    return (

      <div>
        {this.props.children}
      </div>

    );

  }

};


export default App;
