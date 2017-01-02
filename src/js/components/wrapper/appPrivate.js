import React, { 
  
  Component, 
  PropTypes 

} from 'react';
import { bindActionCreators } from 'redux';
import { routerActions } from 'react-router-redux'
import { connect } from 'react-redux';
import { isAuthorized } from '../../actions/auth/checkToken';

require('../../../scss/style.scss');


class AppPrivate extends Component {

  componentDidMount() {

    this.props.isAuthorized();

  }


  componentWillMount(){

    this.props.isAuthorized();

  }


  componentDidUpdate(){

    this.props.isAuthorized();
    
  }


  render() {

    const {isAuthenticated} = this.props;

    return (

      <div>
        {isAuthenticated && this.props.children}
      </div>

    );

  }

}


function matchDispatchToProps(dispatch) {

  return bindActionCreators({

    isAuthorized: isAuthorized,

  }, dispatch);

}


function mapStateToProps(state) {

  return {

    isAuthenticated: state.auth.isAuthenticated,
    isFetching: state.auth.isFetching

  }

}


export default connect(mapStateToProps, matchDispatchToProps)(AppPrivate);