import { Component,OnInit } from '@angular/core';
import { Caution } from '../models/caution.model';
import { Router } from '@angular/router';
import { CautionService } from '../services/caution.service';

@Component({
  selector: 'app-caution',
  templateUrl: './caution.component.html',
  styleUrls: ['./caution.component.css']
})
export class CautionComponent implements OnInit{
  ToShow:Caution[]=[];
  cautions?:Caution[];
  constructor(private cautionService:CautionService,private router:Router){}

  ngOnInit(): void {
    this.cautionService.getAll().subscribe(
      data=>{
        this.ToShow=data;
      }
    )
  }
  detailCaut(idCaution:any){
    this.router.navigate(['cautions/details/'+idCaution]);
  }
  addcaut(){
    this.router.navigate(['addcaution']);
  }
  edit(idCaution:any){
    this.router.navigate(['cautions/modif/'+idCaution]);
  }
}
