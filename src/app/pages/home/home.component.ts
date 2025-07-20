import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CharacterServiceService } from '../../Services/character-service.service';
import { ApiInfo, ApiResponse, Character } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  constructor(private http:HttpClient, private ChaSvc : CharacterServiceService, private route: ActivatedRoute){}

  characters!:Character[]

  Pagination!:ApiInfo

  PagePrev: boolean = false;
  Pagenext: boolean = false;


  errorMessage:string = ''
  addMex: string = ''

  ngOnInit():void{

    this.ChaSvc.getAll().subscribe(data => {

      this.characters = data.results;
      this.Pagination = data.info;

      this.PagePrev = !!this.Pagination.prev;
    this.Pagenext = !!this.Pagination.next

    }
   )
  }


  goToNextPage():void{

    if(this.Pagination.next){
      this.ChaSvc.getByUrl(this.Pagination.next).subscribe(data => {
      this.characters = data.results;
      this.Pagination = data.info;

      this.PagePrev = !!this.Pagination.prev;
    this.Pagenext = !!this.Pagination.next

    });
    }

  }

  goToNextPrevios():void{

    if(this.Pagination.prev){
      this.ChaSvc.getByUrl(this.Pagination.prev).subscribe(data => {
        this.characters = data.results;
        this.Pagination = data.info;

        this.PagePrev = !!this.Pagination.prev;
    this.Pagenext = !!this.Pagination.next
      });
    }

  }


  applicaFiltri(filtri: { name: string; status: string; gender: string }): void {
  this.ChaSvc.getWithFilter(filtri.name, filtri.status, filtri.gender)
    .subscribe({
      next: (data) => {
        this.characters = data.results;
        this.Pagination = data.info;

        this.PagePrev = !!this.Pagination.prev;
        this.Pagenext = !!this.Pagination.next;

        this.errorMessage = '';


      },
      error: (err) => {
        console.log(err.status)

        if (err.status === 404) {
          this.errorMessage = 'Nessun personaggio trovato con questi filtri.';
          this.characters = [];
        } else {
          this.errorMessage = 'Errore durante la ricerca.';
        }
      }
    });
}

showMex(messaggio: string): void {
  this.addMex = messaggio;

  setTimeout(() => {
    this.addMex = '';
  }, 3000);
}



}
