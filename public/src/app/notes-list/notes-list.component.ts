import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes=[];

  constructor(private _httpService:HttpService) {
    this._httpService.retrieveAllNotes()
    .then(data=>{
      this.notes = data;
    })
  }
  
  ngOnChanges(){
    this._httpService.retrieveAllNotes()
    .then(data=>{
      this.notes = data;
    })
  }

  ngOnInit() {
  }

  receivedNotes(event){
    console.log("receiveNotes", event)
    this.notes = event;
  }

}
