import { connect } from 'react-redux';
import { addSymbol, removeSymbol } from '../../actions';

const mapDispatchToProps = dispatch => ({
    addSymbol: payload => dispatch(addSymbol(payload)),
    removeSymbol: () => dispatch(removeSymbol()),
});

export default connect(null, mapDispatchToProps);
