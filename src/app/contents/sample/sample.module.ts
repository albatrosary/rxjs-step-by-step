import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromUi from './ui.reducer';
import * as fromUi from './ui/ui.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UiEffects } from './ui/ui.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SampleRoutingModule,
    StoreModule.forFeature(fromUi.uisFeatureKey, fromUi.reducer),
    StoreModule.forFeature(fromUi.uiFeatureKey, fromUi.reducer),
    EffectsModule.forFeature([UiEffects])
  ]
})
export class SampleModule { }
