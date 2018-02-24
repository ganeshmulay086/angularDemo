import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule} from '@angular/router';
import {ShareServiceService} from './share-service.service';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {appRoutes} from './MasterRouting';
import {AuthGuard} from './auth-guard.service';
@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShareServiceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
