import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Banque } from '../../models/banque.model';
import { BanqueService } from '../../services/banque.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private  router:Router,private banqueService:BanqueService){}
  banque: Banque ={
    nom:'',
    mail:'',
    adresse:'', 
    tel:undefined
     
  };
  
  submitted = false;
  saveBanque():void{
    const banque ={
      
      nom:this.banque.nom,
      mail:this.banque.mail,
      adresse:this.banque.adresse,
      tel:this.banque.tel
    };
    console.log(this.banque);
    this.banqueService.addBank(this.banque).subscribe(
      banque =>{
        console.log(banque);
        this.submitted=true;
      }
    )
  }
  newBank(): void {
    window.location.reload();
    //this.router.navigate(['banques']);
    }
}
