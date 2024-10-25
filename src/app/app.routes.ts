import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { MessagesComponent } from './components/messages/messages.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'messages', component: MessagesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}