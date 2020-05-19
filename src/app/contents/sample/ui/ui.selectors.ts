import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUi from './ui.reducer';

export const selectUiState = createFeatureSelector<fromUi.State>(
  fromUi.uiFeatureKey
);
