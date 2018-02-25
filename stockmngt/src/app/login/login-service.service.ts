import { Injectable } from '@angular/core';
import { LoginUserTO } from './LoginUserTO';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { servicePath } from '../GlobleConstant';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class LoginService {

  constructor(private http: Http) { }

  GetLoginInfo(loginUserTO: LoginUserTO) {
    var data = {
      LoginTo: loginUserTO
    }

    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });

    return this.http.post(servicePath, JSON.stringify(data), options)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())

      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
}
