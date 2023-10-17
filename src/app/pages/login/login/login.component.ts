import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

enum ReportType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARN = 'warn'
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datageldi: any
  bindData: any

  ReportType = ReportType

  constructor(
    private readonly authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.data.subscribe(res => {
      console.log('res', res);
      //şimdi istersen select'e bağlarsın bunu.
      this.datageldi = res;

    })

   }

  ngOnInit() {

    // this.authService.postDatas({
    //   title: 'foo',
    //   body: 'bar',
    //   userId: 1,
    // }).subscribe(res => {
    //   console.log('post', res);
    // })
  }


}
