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

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employees',
        children: [
          {path: '', component: EmployeesComponent},
          {path: 'create', component: EmployeeCreateComponent},
        ]
      },
      { path: 'employees-create', component: EmployeeCreateComponent },
      { path: 'employees/detail/:id', component: EmployeesComponent },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      },
      { path: 'statistics', component: StatisticsComponent },
      {
        path: 'coupens',
        loadChildren: () => import('./coupens/coupens.module').then(m => m.CoupensModule)
      },
      { path: 'pages', component: PagesComponent },
      { path: 'media', component: MediaComponent },
      { path: 'setting', component: SettingsComponent },
    ]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
