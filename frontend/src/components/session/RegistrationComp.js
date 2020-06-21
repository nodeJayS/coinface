import { connect } from 'react-redux';
import { signin, register } from '../../actions/sessionActions';
import Registration from './Registration';

const mapStateToProps = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.error.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: user => dispatch(register(user)),
        signin: user => dispatch(signin(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);