import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TenantsComponent } from './tenants.component';

const routes: Routes = [
    {
        path: 'tenants',
        component: TenantsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantsRoutingModule { }


