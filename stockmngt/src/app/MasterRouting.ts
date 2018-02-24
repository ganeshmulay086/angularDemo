import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {Route,Routes} from '@angular/router';
import {AuthGuard} from'./auth-guard.service';
export const appRoutes: Routes = [
    { path: '', component:LoginComponent},
    { path: 'DashBoardComponent', canActivate: [AuthGuard], component:DashBoardComponent},
 ];
 