import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule} from '@angular/router';
import {ShareService} from './share-service.service';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {appRoutes} from './MasterRouting';
import {AuthGuard} from './auth-guard.service';
import {LoginService} from './login/login-service.service';
import { FormsModule } from "@angular/forms";
import {CommonModule } from "@angular/common";
import {HttpModule} from '@angular/http';
@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShareService,AuthGuard,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
