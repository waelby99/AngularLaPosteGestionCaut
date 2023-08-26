import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from '../models/fournisseur.model';
import { FournisseurService } from '../services/fournisseur.service';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit{
  ToShow:Fournisseur[]=[];
  constructor(private fournisseurService:FournisseurService,private router:Router){}

  ngOnInit(): void {
    this.fournisseurService.getAll().subscribe(
      data=>{
        this.ToShow=data;
      }
    )
  }

}
