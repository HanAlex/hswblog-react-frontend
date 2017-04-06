import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/* actions */
const EXAMPLE = "base/header/EXMPLE";

/* action creators */
export const example = createAction(EXAMPLE);

/* initialState */
const initialState = Map({
    someting: true
});

export default handleActions({
    [EXAMPLE] : (state, action) => (
        state.set('someting', action.payload)
    )
}, initialState);