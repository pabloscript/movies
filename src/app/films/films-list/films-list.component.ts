import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmsService } from '../../core/services/films.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})

export class FilmsListComponent implements OnInit {
  public name = 'Films list';
  public films: Film[];
  public errorMessages = '';
  showModal = false;

  constructor(private filmsService: FilmsService) {}

  ngOnInit() {
    this.filmsService.getFilms().subscribe(
      films => {
        this.films = films;
      },
      error => this.errorMessages = error
    );
  }

  editFilmDetails() {}

  deleteFilm(filmId: number) {
    this.filmsService.deleteFilm(filmId).subscribe( () => {
      this.filmsService.getFilms().subscribe(
        films => this.films = films,
        error => this.errorMessages = error
      );
    });
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
