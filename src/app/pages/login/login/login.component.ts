import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datageldi: any
  constructor(
    private readonly authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.data.subscribe(res => {
      console.log('res', res);

    })

   }

  ngOnInit() {

    this.authService.postDatas({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }).subscribe(res => {
      console.log('post', res);
    })
  }

}
