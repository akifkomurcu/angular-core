import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginGuard } from './core/guard/guard';
import { httpResolver } from './core/resolvers/http.resolver';
const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
    resolve: {
      httpResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [httpResolver]
})
export class AppRoutingModule { }
