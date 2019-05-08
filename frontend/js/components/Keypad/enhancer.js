import { connect } from 'react-redux';

import { addSymbol, removeSymbol } from '../../actions';

const map = {
    2: 'a', 3: 'd', 4: 'g', 5: 'j', 6: 'm', 7: 'p', 8: 't', 9: 'w',
};

const mapDispatchToProps = dispatch => ({
    addSymbol: payload => dispatch(addSymbol({
        number: payload,
        symbol: map[payload],
    })),
    removeSymbol: () => dispatch(removeSymbol()),
});

export default connect(null, mapDispatchToProps);
