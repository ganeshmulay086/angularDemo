import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import {ShareServiceService} from './share-service.service';
import {Router} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private shareServiceService:ShareServiceService,
              private router:Router)
  {
    this.shareServiceService.GetIsLogin();
  }
  canActivate() {
    if(localStorage.getItem("CurrentUser") == null || localStorage.getItem("CurrentUser") == undefined)
    {
      debugger
     this.shareServiceService.GetIsLogOut();
     this.router.navigate(["/"]);
     return false;
    }
    return true;
  }

  canActivateChild() {
    if(localStorage.getItem("CurrentUser") != null || localStorage.getItem("CurrentUser")!=undefined)
    {
      debugger
     this.shareServiceService.GetIsLogin();
     this.router.navigate(["/"]);
     return false;
    }
    console.log('checking child route access');
    return true;
  }

}
