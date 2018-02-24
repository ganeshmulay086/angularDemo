import { Component } from '@angular/core';
import {ShareServiceService,Islogin} from './share-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  islogin:Islogin;
  constructor(private shareServiceService:ShareServiceService)
  {
    this.islogin =this.shareServiceService.islogin;
  }
  SingOutMethod()
  {
    this.shareServiceService.GetIsLogOut();
  }
}
