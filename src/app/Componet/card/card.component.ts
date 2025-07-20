import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { CharacterServiceService } from '../../Services/character-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

    @Input() character!: Character;

    showButtonAdd:boolean = true
    isad: boolean  = false

    constructor(private http:HttpClient, private ChaSvc : CharacterServiceService, private route: ActivatedRoute,private router: Router ){}

    @Output() TextMex = new EventEmitter<string>();


    ngOnInit() {
      this.showButtonAdd = !this.router.url.includes('/preferiti');
    }

    AddPref(character:Character){
      this.ChaSvc.AddPref(character)
      this.isad = true
      this.TextMex.emit('Personaggio aggiunto ai preferiti');
    }

    RemovePref(id:number){
      this.ChaSvc.RemovePref(id)
      this.TextMex.emit('Personaggio rimosso dai preferiti');

    }

}
