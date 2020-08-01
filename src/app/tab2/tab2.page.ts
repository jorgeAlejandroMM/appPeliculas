import { Component, OnInit } from '@angular/core';
import { ListaFavoritos } from '../model/ListaFavoritos.model';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  MoviesFavoritas:ListaFavoritos[]=[]
  constructor(public S_movie:MoviesService) {
   
  }

ngOnInit(){
  this.loadingStorage();
}


  loadingStorage(){ 
    if (localStorage.getItem('Favoritas')){ 
       this.MoviesFavoritas = JSON.parse( localStorage.getItem('Favoritas')); 
      }else{
        this.MoviesFavoritas = [];
      }
  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.loadingStorage();
    }, 2000);
  }




}
