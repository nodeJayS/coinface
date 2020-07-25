import { connect } from 'react-redux';

import { signin } from '../../actions/sessionActions';
import { fetchCoinData } from '../../actions/coinActions';
import Signin from './Signin';

const mapStateToProps = (state) => {
    return {
        errors: state.error.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCoinData: () => dispatch(fetchCoinData()),
        signin: user => dispatch(signin(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);