import { Component, OnInit } from '@angular/core';
import {ShareServiceService} from '../share-service.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private shareServiceService:ShareServiceService,
              private router: Router,   
              private route: ActivatedRoute)
               { 

               }

  ngOnInit() {
  }
  getLoginInfo()
  {
    debugger
    localStorage.setItem("CurrentUser","123");

       this.shareServiceService.GetIsLogin();
       this.router.navigate(["/DashBoardComponent"]);
     // this.islogin= this.shareServiceService.islogin;
  }
}
