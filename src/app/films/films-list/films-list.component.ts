import { Component, OnInit } from '@angular/core';
import {Film} from '../film';
import * as data from 'db.json';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})

export class FilmsListComponent implements OnInit {
  public name = 'Films list';
  public films: Film[];
  public filmsDetailIsVisible = false;

  constructor() {
    this.films =  data.default.movies;
  }

  ngOnInit() {
  }


  public toggleFilmDetails(): void {
    this.filmsDetailIsVisible = !this.filmsDetailIsVisible;
  }
}
