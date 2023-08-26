import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit{
  ToShow:User[]=[];
  constructor(private userService:UserService,private router:Router){}

  ngOnInit(): void {
    this.userService.getAllt().subscribe(
      data=>{
        this.ToShow=data;
      }
    )
  }
}
