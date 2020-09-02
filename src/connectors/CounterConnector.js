import {connect} from 'react-redux';
import CounterDumbComponent from '../dumb-components/CounterDumbComponent';

const mapStateToProps = (state) => {
    
    return {counter: state.counter }
}

// const mapDispatchToProps = { , , }

export default connect (mapStateToProps) (CounterDumbComponent);