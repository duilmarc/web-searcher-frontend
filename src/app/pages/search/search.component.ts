import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Results } from 'src/app/models/link.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  links : Results ;
  word : string;
  constructor( private _activateRoute: ActivatedRoute, private _httpService : HttpService) { }
  
  ngOnInit(): void {
    this._activateRoute.params.subscribe(params => {
      this.word = params['word'];
      this._httpService
            .searchWord(this.word)
            .subscribe(( links: Results ) => {
              this.links = links["data"];
      });
    });
    console.log(this.links);
  }
}
