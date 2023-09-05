import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from 'src/app/models/fournisseur.model';
import { FournisseurService } from 'src/app/services/fournisseur.service';

@Component({
  selector: 'app-editford',
  templateUrl: './editford.component.html',
  styleUrls: ['./editford.component.css']
})
export class EditfordComponent implements OnInit {

  constructor(private router:Router,private fournisseurService:FournisseurService,public route: ActivatedRoute) { }

  id:any;
  fournisseur:any;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['idFournisseur'];
    this.fournisseurService.getFournisseurById(this.id).subscribe(
      data=>{
        this.fournisseur=data
      }
    )
  }
  update(): void {
   
   this.fournisseurService.editFournisseur(this.id, this.fournisseur).subscribe( 
        response => {
          console.log(this.fournisseur);
          console.log(response);
         
        },
        error => {
          console.log(error);});
          window.location.reload();
  }
 
}
