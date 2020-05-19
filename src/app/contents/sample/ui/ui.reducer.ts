import { Action, createReducer, on } from '@ngrx/store';
import * as UiActions from './ui.actions';

export const uiFeatureKey = 'ui';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(UiActions.loadUis, state => state),
  on(UiActions.loadUisSuccess, (state, action) => state),
  on(UiActions.loadUisFailure, (state, action) => state),

);

