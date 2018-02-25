import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {UserRegistrationComponent} from './Master/user-registration/user-registration.component';
import {MasterUiComponent} from './Master/master-ui/master-ui.component';
import {Route,Routes} from '@angular/router';
import {AuthGuard} from'./auth-guard.service';
export const appRoutes: Routes = [
    { path: '', component:LoginComponent},
    { path: 'DashBoardComponent', canActivate: [AuthGuard], component:DashBoardComponent},
    { path:'MasterUI', canActivate: [AuthGuard], component:MasterUiComponent},
    { path:'Registration', canActivate: [AuthGuard], component:UserRegistrationComponent},    
];
 