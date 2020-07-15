import { connect } from 'react-redux';

import { signin } from '../../../actions/sessionActions';
import DummySignin from './DummySignin';

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

export default connect(mapStateToProps, mapDispatchToProps)(DummySignin);