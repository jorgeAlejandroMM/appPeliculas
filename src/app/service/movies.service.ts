import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../model/movie.interface';
import { ListaFavoritos } from '../model/ListaFavoritos.model';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

api_key:string;
url:string
peliculaF:ListaFavoritos[]=[];
  constructor(private http:HttpClient) { 
this.api_key="cfc86031";
this.url="http://www.omdbapi.com/";
this.loadingStorage();

  }


 
  cargarMovies(pelicula?:string):Observable<any>{
    return this.http.get(`${this.url}?s=${pelicula}&apikey=${this.api_key}`)
    .pipe(map((data:any)=>{
      return data.Search
    }
  
    ));

  }


  SaveMoviesFavoritas(movie:Movie){

    let  Temppelicula = new  ListaFavoritos(movie.Title, movie.Year, movie.Poster);
    this.peliculaF.push(Temppelicula);
    this.guardarLocalStorage();
  }


  guardarLocalStorage(){
    localStorage.setItem('Favoritas',JSON.stringify( this.peliculaF));

  }


  loadingStorage(){ 
    if (localStorage.getItem('Favoritas')){ 
       this.peliculaF = JSON.parse( localStorage.getItem('Favoritas')); 
      }else{
        this.peliculaF = [];
      }
  }

}
