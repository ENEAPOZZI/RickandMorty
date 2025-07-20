import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CharacterServiceService } from '../../Services/character-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../interfaces/interfaces';

@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrl: './single-character.component.scss'
})
export class SingleCharacterComponent {



  constructor(
     private http:HttpClient,
     private ChaSvc : CharacterServiceService,
     private route: ActivatedRoute,
     private router: Router
  ){}

  character!:Character

  ngOnInit(): void{

    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.ChaSvc.getSingleCharacter(Number(id)).subscribe(
        data =>
          this.character = data
      )
    }
  }

}
