import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-portal',
  templateUrl: './movies-portal.component.html',
  styleUrls: ['./movies-portal.component.css']
})
export class MoviesPortalComponent implements OnInit {

  movies = [
    {title : 'Tenet', desc: 'Content of the movie', ratings : 5, url : ""},
    {title : 'Fantastic FOur', desc: 'Content of the movie', ratings : 5, url : ""},
    {title : 'Holiday', desc: 'Content of the movie', ratings : 5, url : ""},
    {title : 'Iron Man', desc: 'Content of the movie', ratings : 5, url : ""},
    {title : 'Jumanji', desc: 'Content of the movie', ratings : 5, url : ""}
  ];
  constructor() { }

  ngOnInit() {
  }

}
