import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caution } from 'src/app/models/caution.model';
import { Ordonnateur } from 'src/app/models/ordonnateur.model';
import { Fournisseur } from 'src/app/models/fournisseur.model';
import { Banque } from 'src/app/models/banque.model';
import { CautionService } from 'src/app/services/caution.service';
import { BanqueService } from 'src/app/services/banque.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { OrdonnateurService } from 'src/app/services/ordonnateur.service';


@Component({
  selector: 'app-addcaution',
  templateUrl: './addcaution.component.html',
  styleUrls: ['./addcaution.component.css']
})
export class AddcautionComponent implements OnInit{
  ToShow:Banque[]=[];
  ToShow1:Ordonnateur[]=[];
  ToShow2:Fournisseur[]=[];
  ngOnInit(): void {
    this.banqueService.getAll().subscribe(
      data=>{
        this.ToShow=data;
      }
    )
    this.ordonnaterService.getAll().subscribe(
      data => {
        this.ToShow1 =data;
      }
    )
    this.fournisseurService.getAll().subscribe(
      data =>{
        this.ToShow2 =data;
      }
    )
  }
  constructor(private cautionService:CautionService,private router:Router,private banqueService:BanqueService,private ordonnaterService:OrdonnateurService,private fournisseurService:FournisseurService){}
  caution: Caution ={
    
     code:undefined,
     datecaut:new Date(),
    // datesaisie:undefined,
     dateleve:undefined,
     daterest:undefined,
     reference:'',
     montant:undefined,
     remarque:'',
     etat:'',
     ordonnateurs:null,
     banques:null,
     fournisseurs:null
  };
  
  submitted = false;
  saveCaution():void{
    const caution ={
      
      code:this.caution.code,
      datecaut:this.caution.datecaut,
     // datesaisie:this.caution.datesaisie,
      dateleve:this.caution.dateleve,
      daterest:this.caution.daterest,
      reference:this.caution.reference,
      montant:this.caution.montant,
      remarque:this.caution.remarque,
      etat:this.caution.etat,
      ordonnateurs:this.caution.ordonnateurs,
      banques:this.caution.banques,
      fournisseurs:this.caution.fournisseurs,
    };
    console.log(this.caution);
    this.cautionService.addCaut(this.caution).subscribe(
      caution =>{
        console.log(caution);
        this.submitted=true;
      }
    )
  }
  newCaut(): void {
    window.location.reload();
    }

}
