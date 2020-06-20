import { connect } from 'react-redux';
import { signin } from '../../actions/sessionActions';
import Signin from './Signin';

const mapStateToProps = (state) => {
    return {
    errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // signin: user => dispatch(sigin(user))
        signin: user => console.log("Signed in ", user)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);