import { Component,OnInit } from '@angular/core';
import { Demande } from '../models/demande.model';
import { Router } from '@angular/router';
import { DemandeService } from '../services/demande.service';


@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit{
 
  ngOnInit(): void {
    this.demandeService.getAll().subscribe(
      data=>{
        this.ToShow=data;
      }
    )
  }
  test=true;
  test1=true;
  ToShow:Demande[]=[];
  constructor(private demandeService:DemandeService,private router:Router){}
  edit(idD:any){
    this.router.navigate(['signup/'+idD]);
  }
  onClick():void{
    this.test=!this.test;
    this.test1=!this.test1;
  }
}
