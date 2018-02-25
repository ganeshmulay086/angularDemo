import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { ShareService } from './share-service.service';
import { Router } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private shareService: ShareService,
    private router: Router) {
    this.shareService.GetIsLogin();
  }
  canActivate() {
    if (localStorage.getItem("CurrentUser") == null || localStorage.getItem("CurrentUser") == undefined) {
      debugger
      this.shareService.GetIsLogOut();
      this.router.navigate(["/"]);
      return false;
    }
    return true;
  }

  canActivateChild() {
    if (localStorage.getItem("CurrentUser") != null || localStorage.getItem("CurrentUser") != undefined) {
      debugger
      this.shareService.GetIsLogin();
      this.router.navigate(["/"]);
      return false;
    }
    console.log('checking child route access');
    return true;
  }

}
