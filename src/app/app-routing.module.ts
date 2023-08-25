import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CautionComponent } from './caution/caution.component';
import { DetailcautionComponent } from './caution/detailcaution/detailcaution.component';
import { AddcautionComponent } from './caution/addcaution/addcaution.component';
import { ModifcautionComponent } from './caution/modifcaution/modifcaution.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },  
  { path: 'profile', component: ProfileComponent },
  { path:'cautions',component:CautionComponent },
  { path:'cautions/modif/:idCaution',component:ModifcautionComponent },
  { path:'addcaution',component:AddcautionComponent },
  { path:'cautions/details/:idCaution',component:DetailcautionComponent }
  /*,
  { path: '', redirectTo: 'login', pathMatch: 'full' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
