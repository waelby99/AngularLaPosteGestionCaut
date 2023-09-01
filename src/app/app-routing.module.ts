import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CautionComponent } from './caution/caution.component';
import { DetailcautionComponent } from './caution/detailcaution/detailcaution.component';
import { AddcautionComponent } from './caution/addcaution/addcaution.component';
import { ModifcautionComponent } from './caution/modifcaution/modifcaution.component';
import { BanqueComponent } from './banque/banque.component';
import { OrdonnateurComponent } from './ordonnateur/ordonnateur.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AddComponent } from './banque/add/add.component';
import { AddfournisseurComponent } from './fournisseur/addfournisseur/addfournisseur.component';
import { AddordComponent } from './ordonnateur/addord/addord.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'login', component: LoginComponent },  
  { path:'profile', component: ProfileComponent },
  { path:'cautions',component:CautionComponent },
  { path:'cautions/modif/:idCaution',component:ModifcautionComponent },
  { path:'addcaution',component:AddcautionComponent },
  { path:'cautions/details/:idCaution',component:DetailcautionComponent },
  { path:'banques',component:BanqueComponent },
  { path:'addbanque',component:AddComponent },
  { path:'ordonnateurs',component:OrdonnateurComponent },
  { path:'addord',component:AddordComponent },
  { path:'fournisseurs',component:FournisseurComponent },
  { path:'addfournisseurs',component:AddfournisseurComponent },
  { path:'users',component:UtilisateurComponent }
  /*,
  { path: '', redirectTo: 'login', pathMatch: 'full' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
