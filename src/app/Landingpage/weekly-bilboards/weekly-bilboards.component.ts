import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { LandingPageService } from 'src/app/services/landing-page.service';

@Component({
  selector: 'app-weekly-bilboards',
  templateUrl: './weekly-bilboards.component.html',
  styleUrls: ['./weekly-bilboards.component.css']
})
export class WeeklyBilboardsComponent implements OnInit {
  peliculas : Movie [] = []
  constructor(public _landingService:LandingPageService) { }

  ngOnInit() {
    this.getWeeklyBilboards()
  }

  getWeeklyBilboards(){
    this._landingService.getMovies().subscribe((movies) =>{
      this.peliculas = movies.filter(mov=>mov.cartelera)
    })
  }

}
