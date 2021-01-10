import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {apiServices} from '../services/api.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private apiService: apiServices,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let uploadMovie = {
      "movie_name": form.value.movieName,
      "movie_title": form.value.title,
      "avg_ratings": 0,
      "rating": 0,
      "movie_description": form.value.description,
      "language": form.value.language,
      "cast_crew": form.value.cast,
      "genre": form.value.genere,
      "release_date": form.value.releaseDate,
      "image_url" : form.value.imageURL
    }
    if (form.valid) {
      this.apiService.addMovie(uploadMovie)
        .subscribe((data) => {
          if (data['status']) {
            alert(data['result']);
            form.reset();
          } else {
            alert(data['result']);
          }
        });
    } else {
      return;
    }
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  moveToMoviePortal() {
    this.router.navigate(['/moviePortal']);
  }

}
