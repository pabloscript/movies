import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../../films/film';

@Injectable({
  providedIn: 'root'
})

export class FilmsService {
  private moviesUrl = 'http://localhost:3000/movies';

  constructor(private httpClient: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(this.moviesUrl);
  }

  addFilm(film: Film) {
    this.httpClient.post(this.moviesUrl, film)
    .subscribe(
      data  => console.log('Film has been successfully added ', data),
      error  => console.log('Error occurred while adding new film ', error)
    );
  }

  deleteFilm(filmId) {
    return this.httpClient.delete(this.moviesUrl + '/' + filmId);
  }
}
