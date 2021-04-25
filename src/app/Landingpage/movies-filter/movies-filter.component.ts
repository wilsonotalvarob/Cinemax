import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { LandingPageService } from 'src/app/services/landing-page.service';
declare var $:any;
@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.css']
})
export class MoviesFilterComponent implements OnInit {
   fechas: Date[] = []

   formFilter ={
     date: new Date()
   }
   peliculas : Movie[] =[]
  constructor(public _landingS:LandingPageService) { }

  ngOnInit(): void {
    $('select').formSelect();
    this.createDate();
    this.getMovies();
  }

  createDate(){
    for (let i=0; i<=7; i++){
      let date: Date = new Date()
      date.setDate(date.getDate()+i)
      this.fechas.push(date)
    }
  }

  getMovies(){
    this._landingS.getMovies().subscribe(peliculas=>{
      this.peliculas= peliculas.filter(peli=>peli.cartelera)
    })
  }

}
