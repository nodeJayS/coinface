import { connect } from 'react-redux';
import { signout } from '../../actions/sessionActions';

import NavBar from './NavBar'

const mapStateToProps = state => ({
  signedIn: state.session.isAuthenticated
});

export default connect(mapStateToProps, { signout })(NavBar);