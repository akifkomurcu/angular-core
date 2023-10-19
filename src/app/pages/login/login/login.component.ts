import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { combineLatest, from, interval, of } from 'rxjs';
import { concatMap, distinctUntilChanged, zip, filter, map, mergeMap, scan, take } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datageldi: any
  form: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })
  constructor(
    private readonly authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.data.subscribe(res => {
      console.log('res', res);
      //şimdi istersen select'e bağlarsın bunu.
      this.datageldi = res;

    })

   }

  ngOnInit() {

  }

  onSubmit() {
    this.authService.setUser(this.form.value.username, this.form.value.password);
    this.router.navigate(['/home']);

  }


}
