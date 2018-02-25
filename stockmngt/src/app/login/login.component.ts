import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginUserTO } from './LoginUserTO';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { LoginService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private shareService: ShareService,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService) {

  }
  loginUserTO: LoginUserTO = {};
  loginSucess: boolean = false;
  ngOnInit() {
  }
  getLoginInfo() {
    localStorage.setItem("CurrentUser", "123");
    this.shareService.GetIsLogin();
    this.router.navigate(["/DashBoardComponent"]);
    debugger
  //  this.loginService.GetLoginInfo(this.loginUserTO).subscribe(
  //     w => {
  //       console.log(w);
  //       if (this.loginSucess) {
          
  //         // this.islogin= this.shareServiceService.islogin;
  //       }
  //     }
  //   );
    
  }
}
