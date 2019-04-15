import { connect } from 'react-redux';

import { getInputText} from '../../selectors';

const mapStateToProps = state => ({
    inputText: getInputText(state),
});

export default connect(mapStateToProps, null);
