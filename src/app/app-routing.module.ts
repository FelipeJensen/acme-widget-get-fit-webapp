import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitySignUpListComponent } from './activity-sign-up-list/activity-sign-up-list.component';
import { ActivitySignUpComponent } from './activity-sign-up/activity-sign-up.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'activity-sign-up', component: ActivitySignUpComponent },
  { path: 'activity-sign-ups', component: ActivitySignUpListComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
