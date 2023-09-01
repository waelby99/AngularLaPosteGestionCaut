import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ordonnateur } from '../../models/ordonnateur.model';
import { OrdonnateurService } from '../../services/ordonnateur.service';

@Component({
  selector: 'app-addord',
  templateUrl: './addord.component.html',
  styleUrls: ['./addord.component.css']
})
export class AddordComponent {

  constructor(private  router:Router,private ordonnateurService:OrdonnateurService){}
  ordonnateur: Ordonnateur ={
    nom:'',
    mail:'',
    adresse:'', 
    tel:undefined
     
  };
  
  submitted = false;
  saveordonnateur():void{
    const banque ={
      
      nom:this.ordonnateur.nom,
      mail:this.ordonnateur.mail,
      adresse:this.ordonnateur.adresse,
      tel:this.ordonnateur.tel
    };
    console.log(this.ordonnateur);
    this.ordonnateurService.addOrd(this.ordonnateur).subscribe(
      ordonnateur =>{
        console.log(ordonnateur);
        this.submitted=true;
      }
    )
  }
  newordonnateur(): void {
    window.location.reload();
    }
}
