import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private _http:Http) { }

  newNote(note){
    console.log("LOL", note);
    return this._http.post('/new', note)
    .map(data=>data.json())
    .toPromise();
  }

  retrieveAllNotes(){
    console.log("In retrieveAll")
    return this._http.get('/notes')
    .map(data=>data.json())
    .toPromise();
  }


}
