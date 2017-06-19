import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  // @Output() passNote = new EventEmitter();
  notes = []
  note = {
    content:'',
  }

  constructor(private _httpService:HttpService) { }
  @Output() passNotes = new EventEmitter();
  ngOnInit() {
  }

  createNewNote(form){
    if(!form.valid){
      return;
    }
    this._httpService.newNote(this.note)
    .then(data =>{
      console.log(data);
      this._httpService.retrieveAllNotes()
      .then(data=>{
        this.notes = data;
        this.passNotes.emit(this.notes);
      })
      .catch(err => console.log(err))
    })
    .catch(err=>{ console.log(err)});


    this.note={
      content:'',
    }
    form.resetForm();
  }



}
