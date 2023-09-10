import { Component,OnInit } from '@angular/core';
import { CautionService } from 'src/app/services/caution.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Caution } from 'src/app/models/caution.model';
import { BanqueService } from 'src/app/services/banque.service';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { OrdonnateurService } from 'src/app/services/ordonnateur.service';
import { Ordonnateur } from 'src/app/models/ordonnateur.model';
import { Fournisseur } from 'src/app/models/fournisseur.model';
import { Banque } from 'src/app/models/banque.model';


@Component({
  selector: 'app-modifcaution',
  templateUrl: './modifcaution.component.html',
  styleUrls: ['./modifcaution.component.css']
})
export class ModifcautionComponent implements OnInit  {
  ToShow:Banque[]=[];
  ToShow1:Ordonnateur[]=[];
  ToShow2:Fournisseur[]=[];
  id:any;
  caut:any;
  constructor(private router:Router,private cautionService:CautionService,public route: ActivatedRoute,private banqueService:BanqueService,private ordonnaterService:OrdonnateurService,private fournisseurService:FournisseurService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['idCaution'];
    this.cautionService.getCautionById(this.id).subscribe(
      data=>{
        this.caut=data
      }
    )
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
  update(): void {
   
    if (this.caut.etat=="Main_Leve"){
    this.caut.dateleve=new Date();}
  else if (this.caut.etat=="Restitué")
{
  this.caut.daterest=new Date();
}
   this.cautionService.editCaut(this.id, this.caut).subscribe( 
        response => {
          console.log(response);
        },
        error => {
          console.log(error);});
  }
}
