import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SocialNetwork } from '../Landingpage/navbar-social/social-network';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  apiRedes:string = 'RedesSociales.json'
  constructor(public _http : HttpClient) { }

  getSocialNetworks():Observable<SocialNetwork[]>{
    return this._http.get<SocialNetwork[]>(`${environment.API}${this.apiRedes}`)
  }
}
