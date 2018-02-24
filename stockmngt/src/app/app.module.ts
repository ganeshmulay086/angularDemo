import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {ShareServiceService} from './share-service.service';
const appRoutes: Routes = [
   { path: '', component:LoginComponent},
   //{ path: 'Inventory', component:  },
];
@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShareServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
