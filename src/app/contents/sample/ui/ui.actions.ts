import { createAction, props } from '@ngrx/store';

export const loadUis = createAction(
  '[Ui] Load Uis'
);

export const loadUisSuccess = createAction(
  '[Ui] Load Uis Success',
  props<{ data: any }>()
);

export const loadUisFailure = createAction(
  '[Ui] Load Uis Failure',
  props<{ error: any }>()
);
