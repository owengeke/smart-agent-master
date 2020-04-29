import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyUnitsComponent } from './property-units.component';

const routes: Routes = [
    {
        path: 'property-units',
        component: PropertyUnitsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyUnitsRoutingModule { }

