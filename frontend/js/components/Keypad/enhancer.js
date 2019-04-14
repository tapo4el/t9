import { connect } from 'react-redux';
import { addNumber, removeNumber } from '../../actions';

const mapDispatchToProps = dispatch => ({
    addNumber: payload => dispatch(addNumber(payload)),
    removeNumber: () => dispatch(removeNumber()),
    // addNumber: payload => console.log(payload),
});

export default connect(null, mapDispatchToProps);
