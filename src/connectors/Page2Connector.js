import {connect} from 'react-redux';
import Page2DumbComponent from '../dumb-components/Page2DumbComponent';
import { updateFname, updateLname, updateBothFlname } from '../actions/personActions';

const mapStateToProps = (reduxStore) => {
    console.log('in mstp2, here is the redux store: ', reduxStore);
    return {
        person: reduxStore.reducer2
      };
    }

const mapDispatchToProps = (dispatch) => {
    console.log('in mstp2, here is the dispatch: ', dispatch);
    return {
        updateFname: (fname) => {
          console.log(fname);
          dispatch(updateFname(fname))
        },
        updateLname: (lname) => {
          console.log(lname);
          dispatch(updateLname(lname));
        },
        updateBothFlname: (fname, lname) => {
          console.log(fname+lname);
          dispatch(updateBothFlname(fname, lname));
        }
      };
    }


export default connect(mapStateToProps, mapDispatchToProps)(Page2DumbComponent);