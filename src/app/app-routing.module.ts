import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AuthService } from './service/auth.service';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './service/auth.guard';

// const routes: Routes = [
//   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   {
//     path: '',
//     component: LayoutComponent, // layout utama
//     children: [
//       { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
//       {
//         path: 'employees',
//         canActivate: [authGuard],
//         children: [
//           { path: '', component: EmployeesComponent },
//           { path: 'create', component: EmployeeCreateComponent },
//           { path: 'detail/:id', component: EmployeeDetailComponent },
//         ]
//       },
//       { 
//         path: 'products',
//         loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
//       },
//       { path: 'statistics', component: StatisticsComponent, canActivate: [authGuard] },
//       { 
//         path: 'coupens',
//         canActivate: [authGuard],
//         loadChildren: () => import('./coupens/coupens.module').then(m => m.CoupensModule)
//       },
//       { path: 'pages', component: PagesComponent, canActivate: [authGuard] },
//       { path: 'media', component: MediaComponent, canActivate: [authGuard]},
//       { path: 'setting', component: SettingsComponent, canActivate: [authGuard] },
//     ]
//   },
// ];

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent, // layout utama
    canActivate: [authGuard], // authGuard berlaku untuk semua child routes
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'employees',
        children: [
          { path: '', component: EmployeesComponent },
          { path: 'create', component: EmployeeCreateComponent },
          { path: 'detail/:id', component: EmployeeDetailComponent },
        ]
      },
      { 
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
        canActivate: [authGuard] // Melindungi route lazy-loaded
      },
      { path: 'statistics', component: StatisticsComponent },
      { 
        path: 'coupens',
        loadChildren: () => import('./coupens/coupens.module').then(m => m.CoupensModule),
        canActivate: [authGuard]
      },
      { path: 'pages', component: PagesComponent },
      { path: 'media', component: MediaComponent },
      { path: 'setting', component: SettingsComponent },
    ]
  },
  { path: '**', redirectTo: 'login' } // Redirect jika path tidak ditemukan
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
