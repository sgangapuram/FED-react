import { connect } from 'react-redux';
import CounterDumbComponent from '../dumb-components/CounterDumbComponent';
import { incrementCounter, decrementCounter } from '../actions/counterActions';

const mapStateToProps = (reduxStore) => {
  console.log('CounterConnector::MSTP, here is the redux store: ', reduxStore);
  return {
    counter: reduxStore.reducer1
  };
}

const mapDispatchToProps = (dispatch) => {
  console.log('CounterConnector: mapStateToProps: dispatch is a ', typeof dispatch);
  return {
    dispatchIncrementCounterAction: () => dispatch(incrementCounter()),
    dispatchDecrementCounterAction: () => dispatch(decrementCounter())
  };
  }

export default connect(mapStateToProps, mapDispatchToProps)(CounterDumbComponent); //<CounterDumbComponent counter={0} hardCodedProperty='abc' /> 
//<CounterDumbComponent person = {{fname: 'Rod' , lname:'Nolan'}} />
