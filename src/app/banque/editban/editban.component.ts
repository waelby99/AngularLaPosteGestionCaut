import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banque } from 'src/app/models/banque.model';
import { BanqueService } from 'src/app/services/banque.service';

@Component({
  selector: 'app-editban',
  templateUrl: './editban.component.html',
  styleUrls: ['./editban.component.css']
})
export class EditbanComponent implements OnInit {

  constructor(private router:Router,private banqueService:BanqueService,public route: ActivatedRoute) { }

  id:any;
  banq:any;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['idBanque'];
    this.banqueService.getBanqueById(this.id).subscribe(
      data=>{
        this.banq=data
      }
    )
  }
  update(): void {
   
   this.banqueService.editBank(this.id, this.banq).subscribe( 
        response => {
          console.log(this.banq);
          console.log(response);
         
        },
        error => {
          console.log(error);});
          window.location.reload();
  }
 
}
