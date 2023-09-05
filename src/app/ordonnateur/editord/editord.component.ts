import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdonnateurService } from 'src/app/services/ordonnateur.service';

@Component({
  selector: 'app-editord',
  templateUrl: './editord.component.html',
  styleUrls: ['./editord.component.css']
})
export class EditordComponent implements OnInit {

  constructor(private router:Router,private ordonnateurService:OrdonnateurService,public route: ActivatedRoute) { }

  id:any;
  ordonnateur:any;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['idOrdonnateur'];
    this.ordonnateurService.getOrdonnateurById(this.id).subscribe(
      data=>{
        this.ordonnateur=data
      }
    )
  }
  update(): void {
   
   this.ordonnateurService.editOrdonnateur(this.id, this.ordonnateur).subscribe( 
        response => {
          console.log(this.ordonnateur);
          console.log(response);
         
        },
        error => {
          console.log(error);});
          window.location.reload();
  }
 
}

