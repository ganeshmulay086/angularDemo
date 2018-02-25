import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from'rxjs/Rx';
export interface Islogin
{
  isUserLogin?:boolean;
}
@Injectable()
export class ShareService {

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
