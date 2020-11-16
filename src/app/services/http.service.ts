import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Results } from 'src/app/models/link.model';
import { environment } from "src/environments/environment"

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = environment.BASE_API_URL;
  constructor( private readonly _http: HttpClient ) { }

  // busqueda  de  paginas
  public searchWord(word: string){
    return this._http.get<Results>(this.baseUrl + "/search/" + word);
  }

}
