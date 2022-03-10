import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './sections//shared/settings/settings.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';


const routes: Routes = [
  {path: 'settings', component: SettingsComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
