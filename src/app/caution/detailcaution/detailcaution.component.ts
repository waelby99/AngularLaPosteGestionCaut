import { Component,OnInit, ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { CautionService } from 'src/app/services/caution.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailcaution',
  templateUrl: './detailcaution.component.html',
  styleUrls: ['./detailcaution.component.css']
})
export class DetailcautionComponent implements OnInit{

  
  @ViewChild('cheques', { static: false }) content!: ElementRef;
  caution:any;
  
  idCaution:any;
  mat:any;
  nom:any;
  constructor(private cautionService:CautionService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {

    this.route.params.subscribe(router =>{
      this.idCaution=this.route.snapshot.params['idCaution'];
    }) 

    this.cautionService.getCautionById(this.idCaution).subscribe(
      caution=>{
        this.mat=caution;
        console.log(caution);
      }
    )
  }
  generatePDF() {
    const pdf = new jsPDF();
    html2canvas(this.content.nativeElement).then((canvas) => {
      pdf.save('mon-fichier.pdf');
    });
  }


}
