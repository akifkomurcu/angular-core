import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { takeWhile, timeoutWith } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class httpResolver implements Resolve<any> {

  constructor(
    private readonly authService: AuthService,
    private readonly httpClient: HttpClient
  ) {
  }

  resolve({ queryParams: { test } }: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

}
