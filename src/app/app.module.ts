import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    NavbarComponent,
    CautionComponent,
    DetailcautionComponent,
    AddcautionComponent,
    ModifcautionComponent,
    BanqueComponent,
    OrdonnateurComponent,
    FournisseurComponent,
    UtilisateurComponent,
    AddComponent,
    AddfournisseurComponent,
    AddordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
