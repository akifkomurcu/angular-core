import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginGuard } from './core/guard/guard';
import { httpResolver } from './core/resolvers/http.resolver';
import { RxjsComponent } from './pages/rxjs/rxjs/rxjs.component';
import { LifecycleComponent } from './pages/lifecycle/lifecycle.component';
import { ChangeStrategyParentComponent } from './pages/change-strategy/change-strategy-parent/change-strategy-parent.component';
const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [LoginGuard],
    resolve: {
      httpResolver
    }
  },
  {
    path: 'rxjs',
    component: RxjsComponent,
    // canActivate: [LoginGuard],
    resolve: {
      httpResolver
    }
  },
  {
    path: 'lifecycle',
    component: LifecycleComponent,
    // canActivate: [LoginGuard],
    resolve: {
      httpResolver
    }
  },
  {
    path: 'change-strategy',
    component: ChangeStrategyParentComponent,
    // canActivate: [LoginGuard],
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
