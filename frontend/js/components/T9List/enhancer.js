import { connect } from 'react-redux';

import { addWord } from '../../actions';

const mapStateToProps = state => {
    console.log(state);
    return {
        predictions: ['state', 'predictionMask', 'join'],
    }
};

const mapDispatchToProps = dispatch => ({
    addWord: payload => dispatch(addWord(payload)),
    // addNumber: payload => console.log(payload),
});

export default connect(mapStateToProps, mapDispatchToProps);
