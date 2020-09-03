import {connect} from 'react-redux';
import Page2DumbComponent from '../dumb-components/Page2DumbComponent';

const mapStateToPropsPage2 = (reduxStore) => {
    console.log('in mstp2, here is the redux store: ', reduxStore);
    return {
        page2Data: reduxStore.reducer2 
      };
    }


export default connect(mapStateToPropsPage2)(Page2DumbComponent);