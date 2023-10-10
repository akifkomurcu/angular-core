import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private username: string;
  private password: string;

  constructor(private httpClient: HttpClient) {
    this.username = '';
    this.password = '';
   }

  //setter metod
  setUser(username: string, password: string) {
    console.log('username', username);
    console.log('password', password);

    this.username = username;
    this.password = password;
  }


  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }

  dummyData(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  postDatas(data: any): Observable<any> {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts', data)
  }


}
