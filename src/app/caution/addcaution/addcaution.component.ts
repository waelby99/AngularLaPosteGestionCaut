import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caution } from 'src/app/models/caution.model';
import { CautionService } from 'src/app/services/caution.service';

@Component({
  selector: 'app-addcaution',
  templateUrl: './addcaution.component.html',
  styleUrls: ['./addcaution.component.css']
})
export class AddcautionComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(private cautionService:CautionService,private router:Router){}
  caution: Caution ={
    id:'',
     code:0,
     datecaut:new Date(),
     reference:'',
     montant:'',
     remarque:'',
     etat:'',
     ordonnateurs:'',
     banques:'',
     fournisseurs:''
  };
  submitted = false;
  saveCaution():void{
    const caution ={
      id:this.caution.id,
      code:this.caution.code,
      datecaut:this.caution.datecaut,
      reference:this.caution.reference,
      montant:this.caution.montant,
      remarque:this.caution.remarque,
      etat:this.caution.etat,
      ordonnateurs:this.caution.ordonnateurs,
      banques:this.caution.banques,
      fournisseurs:this.caution.fournisseurs
    };
    console.log(this.caution);
    this.cautionService.addCaut(this.caution).subscribe(
      caution =>{
        this.submitted=true;
        console.log(caution);
  
      }
    )
  }
  newCaut(): void {
    window.location.reload();
    }

}
