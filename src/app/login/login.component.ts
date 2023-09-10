import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { Demande } from '../models/demande.model';
import { DemandeService } from '../services/demande.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  test=true;

  demande: Demande ={
    username:'',
    nom:'',
    position:'',
    prenom:'',
    email:'',
    password:'', 
    demandecreatedat:new  Date(),
    etat:false
     
  };
  
  submitted1 = false;
  save():void{
    const demande ={
      
      username:this.demande.username,
      nom:this.demande.nom,
      position:this.demande.position,
      prenom:this.demande.prenom,
      email:this.demande.email,
      password:this.demande.password,
      demandecreatedat:this.demande.demandecreatedat,
      etat:this.demande.etat,
      
    };
    console.log(demande);
    this.demandeService.addDemande(this.demande).subscribe(
      demande =>{
        console.log(demande);
        this.submitted1=true;
      }
    )
  }

  constructor(private authService: AuthService, private storageService: StorageService,private router:Router,private demandeService:DemandeService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  onClick():void{
    this.test=!this.test;
  }

  reloadPage(): void {
    window.location.reload();
  }
  
}