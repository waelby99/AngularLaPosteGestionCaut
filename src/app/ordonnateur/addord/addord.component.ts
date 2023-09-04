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
    ref:'',
  };
  
  submitted = false;
  saveordonnateur():void{
    const ord ={
      
      nom:this.ordonnateur.nom,
      ref:this.ordonnateur.ref
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
