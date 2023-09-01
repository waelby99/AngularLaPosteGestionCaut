import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from '../../models/fournisseur.model';
import { FournisseurService } from '../../services/fournisseur.service';

@Component({
  selector: 'app-addfournisseur',
  templateUrl: './addfournisseur.component.html',
  styleUrls: ['./addfournisseur.component.css']
})
export class AddfournisseurComponent {
  constructor(private  router:Router,private fournisseurService:FournisseurService){}
  fournisseur: Fournisseur ={
    nom:'',
    mail:'',
    adresse:'', 
    tel:undefined
     
  };
  
  submitted = false;
  savefournisseur():void{
    const fournisseur ={
      
      nom:this.fournisseur.nom,
      mail:this.fournisseur.mail,
      adresse:this.fournisseur.adresse,
      tel:this.fournisseur.tel
    };
    console.log(this.fournisseur);
    this.fournisseurService.addFour(this.fournisseur).subscribe(
      fournisseur =>{
        console.log(fournisseur);
        this.submitted=true;
      }
    )
  }
  newfournisseur(): void {
    window.location.reload();
    //this.router.navigate(['banques']);
    }
}
