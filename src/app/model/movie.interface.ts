import { ListaFavoritos } from './ListaFavoritos.model';

export class Movie{
  
    Title:string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Favoritos:ListaFavoritos[];
    constructor(){
        this.Favoritos=[];
    }
}