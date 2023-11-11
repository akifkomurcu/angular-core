import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { commonAction } from 'src/app/core/state/actions/common.action';
import { CommonState } from 'src/app/core/state/common.state';
import { Navigate } from '@ngxs/router-plugin';

enum ReportType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARN = 'warn'
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  examples = [
    {
      name: 'rxJS Example',
      link: '/rxjs'
    }
  ]


  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.data.subscribe(res => {
      console.log('resolverdan componente geldi', res);
      //şimdi istersen select'e bağlarsın bunu.
      this.datageldi = res;
    })
   }
  datageldi: any
  bindData: any

  ReportType = ReportType
  ngOnInit() {
    // this.store.dispatch(new commonAction());


    // this.authService.postDatas({
    //   title: 'foo',
    //   body: 'bar',
    //   userId: 1,
    // }).subscribe(res => {
    //   console.log('post', res);
    // })

  }


  onChange(e: any) {
    console.log('change', e.target.value);
    if(e.target.value) {
      this.store.dispatch(new commonAction(e.target.value)).pipe(
        map(()=> this.store.selectSnapshot(CommonState.test))
      ).subscribe(res => {
        console.log('res::::', res);
      })
    }
  }
  goToLink(s: string) {
    this.store.dispatch(new Navigate([s]));
  }

}
