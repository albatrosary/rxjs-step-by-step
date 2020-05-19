import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Ui } from './ui.model';

export const loadUis = createAction(
  '[Ui/API] Load Uis', 
  props<{ uis: Ui[] }>()
);

export const addUi = createAction(
  '[Ui/API] Add Ui',
  props<{ ui: Ui }>()
);

export const upsertUi = createAction(
  '[Ui/API] Upsert Ui',
  props<{ ui: Ui }>()
);

export const addUis = createAction(
  '[Ui/API] Add Uis',
  props<{ uis: Ui[] }>()
);

export const upsertUis = createAction(
  '[Ui/API] Upsert Uis',
  props<{ uis: Ui[] }>()
);

export const updateUi = createAction(
  '[Ui/API] Update Ui',
  props<{ ui: Update<Ui> }>()
);

export const updateUis = createAction(
  '[Ui/API] Update Uis',
  props<{ uis: Update<Ui>[] }>()
);

export const deleteUi = createAction(
  '[Ui/API] Delete Ui',
  props<{ id: string }>()
);

export const deleteUis = createAction(
  '[Ui/API] Delete Uis',
  props<{ ids: string[] }>()
);

export const clearUis = createAction(
  '[Ui/API] Clear Uis'
);
