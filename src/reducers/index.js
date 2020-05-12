import { combineReducers } from 'redux';
import ViewReducer from './reducer_view';
import ValuesReducer from './reducer_values';
import HeaderReducer from './reducer_header';
import MatterNavReducer from './reducer_matters';

export default combineReducers({

	view: ViewReducer,
	values: ValuesReducer,
	header: HeaderReducer,
	matterNav: MatterNavReducer,
});
