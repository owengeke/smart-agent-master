import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrtMorrisRoutingModule } from './crt-morris-routing.module';
import { CrtMorrisComponent } from './crt-morris.component';
import {MorrisJsModule} from 'angular-morris-js';

@NgModule({
  imports: [
    CommonModule,
    CrtMorrisRoutingModule,
    MorrisJsModule
  ],
  declarations: [CrtMorrisComponent]
})
export class CrtMorrisModule { }
