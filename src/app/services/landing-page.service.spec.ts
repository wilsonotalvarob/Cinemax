import { getTestBed, TestBed } from '@angular/core/testing';

import { LandingPageService } from './landing-page.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SocialNetwork } from '../Landingpage/navbar-social/social-network';

describe('LandingPageService', () => {
  let service: LandingPageService;
  let injector: TestBed;
  let httpMock: HttpTestingController
  let mockResponse: SocialNetwork[] = [
    {
      "nombre": "Facebook",
      "url": "https://www.facebook.com/wilson.otalvaro"
      },
      {
      "nombre": "Twitter",
      "url": "https://twitter.com/"
      },
      {
      "nombre": "youtube",
      "url": "https://www.youtube.com/channel/UCGbYqevVy0itrqidAnRnEKw"
      },
      {
      "nombre": "Instagram",
      "url": "https://www.instagram.com/otalvaro.wilson/"
      }
  ]
  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule]
    });
    injector = getTestBed()
    httpMock = injector.get(HttpTestingController)
    service = TestBed.inject(LandingPageService);
  });

  it('Debe Crear el servicio', () => {
    expect(service).toBeTruthy();
  });

  it ('debe llamar el metodo getSocialNetworks() y retornar las redes sociales',()=>{
    service.getSocialNetworks().subscribe((redes)=>{
      expect(redes.length).toBe(4)
      expect(redes).toEqual(mockResponse)
    })
    const req = httpMock.expectOne('https://cinemax-6bd7e-default-rtdb.firebaseio.com/RedesSociales.json')
    expect(req.request.method).toBe('GET')
    req.flush(mockResponse)
  })
});
