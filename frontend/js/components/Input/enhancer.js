import { connect } from 'react-redux';

// const mapStateToProps = state => ({
//     text: state.predictionMask,
// });
const mapStateToProps = state => {
    console.log(state);
    return {
        text: state.predictionMask.join(''),
    }
};

export default connect(mapStateToProps, null);
