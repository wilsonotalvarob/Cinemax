import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SocialNetwork } from '../Landingpage/navbar-social/social-network';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  apiRedes:string = 'RedesSociales.json'
  apiPeliculas: string = 'Peliculas.json'
  constructor(public _http : HttpClient) { }

  getSocialNetworks():Observable<SocialNetwork[]>{
    return this._http.get<SocialNetwork[]>(`${environment.API}${this.apiRedes}`)
  }

  getMovies():Observable<Movie[]>{
    return this._http.get<Movie[]>(`${environment.API}${this.apiPeliculas}`)
  }
}
