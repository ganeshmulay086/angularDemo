import { Injectable } from '@angular/core';
import { Http, Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from'rxjs/Rx';
export interface Islogin
{
  isUserLogin?:boolean;
}
@Injectable()
export class ShareServiceService {

  constructor() { }
  islogin:Islogin={isUserLogin:false};
  GetIsLogin()
  {
    this.islogin.isUserLogin=true;
  }
GetIsLogOut()
{
  this.islogin.isUserLogin=false;
}
}
