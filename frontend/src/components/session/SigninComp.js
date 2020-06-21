import { connect } from 'react-redux';
import { signin } from '../../actions/sessionActions';
import Signin from './Signin';

const mapStateToProps = (state) => {
    return {
    errors: state.error.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signin: user => dispatch(signin(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);