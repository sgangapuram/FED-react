import { connect } from 'react-redux';
import CounterDumbComponenet from '../dumb-components/CounterDumbComponenet';

const mapStateToProps = (reduxStore) => {
  console.log('in mapStateToProps, here is the redux store: ', reduxStore);
  return {
    counter: reduxStore,
    hardCodedProperty: 'abc'
  };
}

export default connect(mapStateToProps)(CounterDumbComponenet); //<CounterDumbComponent counter={0} hardCodedProperty='abc' /> 
