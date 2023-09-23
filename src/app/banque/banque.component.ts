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
  searchQuery: string = '';
  
  loadBanques() {
    this.banqueService.getAll().subscribe(
      (data) => {
        this.ToShow = data;
      }
    );
  }
  ngOnInit(): void {
    this.loadBanques();
  }
  /*detailbank(idCaution:any){
    this.router.navigate(['cautions/details/'+idCaution]);
  }*/
  addbank(){
    this.router.navigate(['addbanque']);
  }
  edit(idBanque:any){
    this.router.navigate(['banques/modif/'+idBanque]);
  }
  filterBanques() {
  if (!this.searchQuery) {
    this.loadBanques();
    return;
  }
  this.ToShow = this.ToShow.filter((banque) => {
    if (banque && banque.nom) {
      return (banque.nom.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      return false;
    }
  });
}

}
