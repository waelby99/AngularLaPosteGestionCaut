import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banque } from '../models/banque.model';
import { BanqueService } from '../services/banque.service';

@Component({
  selector: 'app-banque',
  templateUrl: './banque.component.html',
  styleUrls: ['./banque.component.css']
})
export class BanqueComponent implements OnInit{


  ToShow:Banque[]=[];
  constructor(private banqueService:BanqueService,private router:Router){}

  ngOnInit(): void {
      this.banqueService.getAll().subscribe(
        data=>{
          this.ToShow=data;
        }
      )
  }
  /*detailbank(idCaution:any){
    this.router.navigate(['cautions/details/'+idCaution]);
  }*/
  addbank(){
    this.router.navigate(['addbanque']);
  }
  /*edit(idCaution:any){
    this.router.navigate(['cautions/modif/'+idCaution]);
  }*/
}
