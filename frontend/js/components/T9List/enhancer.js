import { connect } from 'react-redux';

import { addWord } from '../../actions';
import { getSuggestions } from '../../selectors';

const mapStateToProps = state => ({
    suggestions: getSuggestions(state),
});

const mapDispatchToProps = dispatch => ({
    addWord: payload => dispatch(addWord(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps);
