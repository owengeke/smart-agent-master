import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import {SharedModule} from '../../theme/shared/shared.module';
import {MorrisJsModule} from 'angular-morris-js';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MorrisJsModule,
    SharedModule
  ]
})
export class ReportsModule { }


