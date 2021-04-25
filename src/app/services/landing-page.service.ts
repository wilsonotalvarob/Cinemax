import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { generate, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SocialNetwork } from '../Landingpage/navbar-social/social-network';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  apiRedes:string = 'RedesSociales.json'
  apiPeliculas: string = 'Peliculas.json'

  formatos:string [] = [
    'Doblada 2d', 'Doblada 3d', 'Original 2d', 'Original 3d'
  ]

  horas : string [] = []
  constructor(public _http : HttpClient) {
    this.generateHours()
   }
    generateHours(){
    for (let i = 2; i<=10; i = i+2){
      let hora = `${i}:00pm`
      this.horas.push(hora)
    }
  }
  getSocialNetworks():Observable<SocialNetwork[]>{
    return this._http.get<SocialNetwork[]>(`${environment.API}${this.apiRedes}`)
  }

  getMovies():Observable<Movie[]>{
    return this._http.get<Movie[]>(`${environment.API}${this.apiPeliculas}`)
  }
}
