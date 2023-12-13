import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginGuard } from '../core/guard/guard';
import { Routes, RouterModule } from '@angular/router';
import { EnumToArrayPipe } from '../core/pipes/enum-to-array-pipe';
import { LoggerDirective } from '../core/directives/logger.directive';
import { AlertPipe } from '../core/pipes/alert.pipe';
import { RxjsComponent } from './rxjs/rxjs/rxjs.component';
import { SubPageComponent } from './lifecycle/sub-page/sub-page/sub-page.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';



@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [],
  declarations: [LoginComponent, HomeComponent, EnumToArrayPipe, LoggerDirective, AlertPipe, RxjsComponent,LifecycleComponent, SubPageComponent],
  providers: [

  ],
})
export class PagesModule { }
