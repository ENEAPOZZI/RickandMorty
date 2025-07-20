import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CharacterServiceService } from '../../Services/character-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../interfaces/interfaces';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.scss'
})
export class PreferitiComponent {

  constructor(
       private http:HttpClient,
       private ChaSvc : CharacterServiceService,
       private route: ActivatedRoute,
       private router: Router
  ){}

  eliminateMex:string = ''

  Preferiti!:Character[]

  ngOnInit(): void{

    this.ChaSvc.PreferitiSub$.subscribe( data => {
      this.Preferiti = data;
    });

  }


  showMex(mex: string ){
    this.eliminateMex = mex

     setTimeout(() => {
    this.eliminateMex = '';
  }, 3000);
  }

}
