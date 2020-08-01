import { Component } from '@angular/core';
import {MoviesService} from '../service/movies.service'
import { Movie } from '../model/movie.interface';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nombrePelicula:string;
  Peliculas:Array<Movie>[];
  constructor(private S_movie:MoviesService) {

    this.nombrePelicula="avenger";
   
  }



  
agregarItem(){
  if(this.nombrePelicula.length==0)
  {
    return;
  }else{

    this.S_movie.cargarMovies(this.nombrePelicula).subscribe((data:any)=>{
        this.Peliculas=data 
        console.log(this.Peliculas);
      })

  }

}


addfavotiros(pelicula:Movie){
this.S_movie.SaveMoviesFavoritas(pelicula);

}

}
