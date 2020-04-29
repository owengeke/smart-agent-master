import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { HomeComponent } from './demo/home/home.component';
import { PropertyUnitsComponent } from './demo/property-units/property-units.component';
import { TenantsComponent } from './demo/tenants/tenants.component';
import { ReportsComponent } from './demo/reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './demo/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'basic',
        loadChildren: './demo/ui-elements/ui-basic/ui-basic.module#UiBasicModule'
      },
      {
        path: 'forms',
        loadChildren: './demo/pages/form-elements/form-elements.module#FormElementsModule'
      },
      {
        path: 'tables',
        loadChildren: './demo/pages/tables/tables.module#TablesModule'
      },
      {
        path: 'charts',
        loadChildren: './demo/pages/core-chart/core-chart.module#CoreChartModule'
      },
      {
        path: 'maps',
        loadChildren: './demo/pages/core-maps/core-maps.module#CoreMapsModule'
      },
      {
        path: 'property-units',
        component: PropertyUnitsComponent
      },
      {
        path: 'tenants',
        component: TenantsComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './demo/pages/authentication/authentication.module#AuthenticationModule'
      },
    ]
  },
  {
    path: 'home',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
