import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSocialComponent } from './navbar-social.component';
import { LandingPageService } from 'src/app/services/landing-page.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SocialNetwork } from './social-network';
import { of } from 'rxjs'

fdescribe('NavbarSocialComponent', () => {
  let component: NavbarSocialComponent;
  let fixture: ComponentFixture<NavbarSocialComponent>;
  let service : LandingPageService

  let mockResponse : SocialNetwork[] = [
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

  beforeEach(async () => {
     TestBed.configureTestingModule({
      declarations: [ NavbarSocialComponent ],
      providers: [LandingPageService],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSocialComponent);
    component = fixture.componentInstance;
    service = component._landingService
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe inyectar landingpageService', () => {
    expect(service).toBeTruthy();
  })

  it('Debe llenar la variable SocialNetworks al llamar getSocialnetWorks() de _landingService', () => {
    spyOn(service, 'getSocialNetworks').and.returnValue(of(mockResponse))

    component.ngOnInit()
    expect(component.SocialNetworks).toEqual(mockResponse)
  })
});
