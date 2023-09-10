import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService } from 'src/app/services/demande.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit{
  
  id:any;
  demande:any;
  submitted1 = false;
  constructor(private router:Router,private demandeService:DemandeService,private authService:AuthService,public route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['idD'];
    this.demandeService.getDemandeById(this.id).subscribe(
      data=>{
        this.demande=data
      }
    )
  }
  
  submit():void{
    this.authService.register(this.demande.username,this.demande.nom,this.demande.position,this.demande.prenom,this.demande.email,this.demande.password).subscribe(
      data=>{
        this.submitted1=true;
        console.log(data);
      }
    )
    this.demande.etat=true;
    this.demandeService.editCaut(this.id,this.demande).subscribe( response => {
      
      console.log(response);
    });
    this.router.navigate(['users']);   
  }
}
