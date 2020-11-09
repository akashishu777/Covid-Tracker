import { combineReducers, Reducer } from 'redux';
import { ICovidStoreState } from '../../types/models';
import mainReducer from './root.reducer';

export interface IStoreState {
    covid: ICovidStoreState
}

type ReducerMaps = { [K in keyof IStoreState]: Reducer<any> };

const allReducers: ReducerMaps = {
    covid: mainReducer,
};

const rootReducer = combineReducers({...allReducers});

export default rootReducer;