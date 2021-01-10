import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {apiServices} from '../services/api.services';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-movies-portal',
  templateUrl: './movies-portal.component.html',
  styleUrls: ['./movies-portal.component.css']
})
export class MoviesPortalComponent implements OnInit {
  movies = [];
  userType = 'user';
  @ViewChild('searchText') searchText: ElementRef;

  constructor(private apiService: apiServices,
              private router: Router) {
  }

  ngOnInit() {
    this.userType = localStorage.getItem('user_role');
    console.log(this.userType);
    this.fetchAllMovies();
  }

  fetchAllMovies() {
    this.apiService.fetchAllMovies().subscribe((res) => {
      this.movies = res['result'];
    });
  }


  showMovieDetails(movieID) {
    console.log('movie id', movieID);
    this.apiService.setSelectedMovieID(movieID);
    this.router.navigateByUrl('/movieInfo/'+ movieID);
  }

  searchMovie(form: NgForm) {
    console.log(form.value.searchText);
    if(form.valid) {
      this.apiService.searchMovie(form.value.searchText).subscribe((res) => {
        this.movies = res['result'];
      });
    } else {
      return
    }
  }
  deleteMovie(movieID) {
      this.apiService.deleteMovie(movieID).subscribe((res) => {
        this.movies = res['result'];
        this.fetchAllMovies();
      });

  }

  cancelSearch() {
    this.fetchAllMovies();
  }

}
