import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordonnateur } from '../models/ordonnateur.model';
import { OrdonnateurService } from '../services/ordonnateur.service';

@Component({
  selector: 'app-ordonnateur',
  templateUrl: './ordonnateur.component.html',
  styleUrls: ['./ordonnateur.component.css']
})
export class OrdonnateurComponent implements OnInit{
  
  ToShow:Ordonnateur[]=[];
  constructor(private ordonnateurService:OrdonnateurService,private router:Router){}

  ngOnInit(): void {
    this.ordonnateurService.getAll().subscribe(
      data=>{
        this.ToShow=data;
      }
    )
  }
  addord(){
    this.router.navigate(['addord']);
  }

}
