import produce from 'immer';
import { ICovidStoreState } from '../../types/models';
import { Actions, ActionTypes } from '../actions/dashbaord.actions';

const initialState: ICovidStoreState = {
  error: undefined,
  items: null,
  loading: false,
}

const rootReducer = (state = initialState, action: Actions) =>
  produce(state, (draft: ICovidStoreState) => {
      switch(action.type) {

          case ActionTypes.COVID_GET_INIT:
            draft.loading = true;
            break;

          case ActionTypes.COVID_GET_SUCCESS:
            draft.loading = false;
            draft.error = false;
            draft.items = action.payload;
            break;

          case ActionTypes.COVID_GET_ERROR:
            draft.loading = false;
            draft.error = true;
            break;
      }
    });

export default rootReducer;