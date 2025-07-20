import { Character } from './../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})

export class CharacterServiceService {

  constructor(private http:HttpClient){}


  AllCharacterUrl:string = 'https://rickandmortyapi.com/api/character'

  PreferitiSub = new BehaviorSubject<Character[]>([])
  PreferitiSub$ = this.PreferitiSub.asObservable()

  // Per tutti i character
  getAll():Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.AllCharacterUrl)
  }

  // Per paginazione
  getByUrl(url: string): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(url);
  }


  //Per gestione filtri
  getWithFilter(name ?: string , status ?:string , gender ?:string ):Observable<ApiResponse>{

    let Baseurl:string = this.AllCharacterUrl

    let filtri: string[] = [];

    if(name) filtri.push(`name=${name}`)
    if(status) filtri.push(`status=${status}`)
    if(gender) filtri.push(`gender=${gender}`)


    let queryString = filtri.length ? '?' + filtri.join('&') : '';

    let completeurl:string = ` ${Baseurl}/${queryString}`

    return this.http.get<ApiResponse>(completeurl);
  }

  // Per caricare un singolo personaggio
  getSingleCharacter(id:number):Observable<Character>{
    return this.http.get<Character>(`${this.AllCharacterUrl}/${id}`);
  }


  //Aggiungi dai Preferiti
  AddPref(Character : Character ){

    const ChaId: number = Character.id

    const currentData = this.PreferitiSub.getValue()

    if (currentData.find(c => c.id === ChaId) ){
    }else{

      this.PreferitiSub.next([Character, ...currentData])
    }

  }

  //Togli dai  Preferiti
  RemovePref(id:number){

    const currentData = this.PreferitiSub.getValue()

    const newArray = currentData.filter(c => c.id !== id)

    this.PreferitiSub.next(newArray)

  }
}
