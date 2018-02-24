import { Component } from '@angular/core';
import {ShareServiceService,Islogin} from './share-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  islogin:Islogin;
  constructor(private shareServiceService:ShareServiceService,private router:Router)
  {
    this.islogin =this.shareServiceService.islogin;
  }
  SingOutMethod()
  {
    localStorage.clear();
    this.shareServiceService.GetIsLogOut();
    this.router.navigate(["/"]);
  }
}
