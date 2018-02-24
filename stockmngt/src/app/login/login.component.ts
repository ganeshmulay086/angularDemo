import { Component, OnInit } from '@angular/core';
import {ShareServiceService} from '../share-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private shareServiceService:ShareServiceService
  ) { }

  ngOnInit() {
  }
  getLoginInfo()
  {
       this.shareServiceService.GetIsLogin();
     // this.islogin= this.shareServiceService.islogin;
  }
}
