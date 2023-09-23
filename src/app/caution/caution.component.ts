import { Component, OnInit } from '@angular/core';
import { Caution } from '../models/caution.model';
import { Router } from '@angular/router';
import { CautionService } from '../services/caution.service';

@Component({
  selector: 'app-caution',
  templateUrl: './caution.component.html',
  styleUrls: ['./caution.component.css']
})
export class CautionComponent implements OnInit {
  ToShow: Caution[] = [];
  //searchQuery: string = '';
  searchMode: string = 'reference'; // Mode de recherche par défaut
  referenceQuery: string = ''; // Valeur de recherche par référence
  etatQuery: string = ''; // Valeur de recherche par état
  startDate: Date = new Date(); // Date de début pour la recherche par date de caution
  endDate: Date = new Date();
  
  
  constructor(private cautionService: CautionService, private router: Router) {}

  ngOnInit(): void {
    this.cautionService.getAll().subscribe((data) => {
      this.ToShow = data;
    });
  }

  

  detailCaut(idCaution: any) {
    this.router.navigate(['cautions/details/' + idCaution]);
  }

  addcaut() {
    this.router.navigate(['addcaution']);
  }

  edit(idCaution: any) {
    this.router.navigate(['cautions/modif/' + idCaution]);
  }


search() {
  if (this.searchMode === 'reference') {
    this.ToShow = this.ToShow.filter((caution:any) =>
      caution.reference.includes(this.referenceQuery)
    );
  } else if (this.searchMode === 'etat') {
    this.ToShow = this.ToShow.filter((caution) =>
      caution.etat === this.etatQuery
    );
  } else if (this.searchMode === 'date') {
    const startDate = new Date(this.startDate);
    const endDate = new Date(this.endDate);
    this.ToShow = this.ToShow.filter((caution:any) => {
      const cautionDate = new Date(caution.datecaut);
      return cautionDate >= startDate && cautionDate <= endDate;
    });
  }
}


}
