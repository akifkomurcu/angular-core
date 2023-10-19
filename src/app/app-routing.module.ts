import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginGuard } from './core/guard/guard';
import { httpResolver } from './core/resolvers/http.resolver';
const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
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
