import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService:AuthService,private storageService:StorageService){

  }
  logout(): void {
    
    this.storageService.clean();
    
    window.location.reload();
  }
}
