import {Component, OnInit} from '@angular/core';
import {apiServices} from '../services/api.services';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.css']
})

export class MoviesInfoComponent implements OnInit {

  showCommentPanel = false;
  userType = 'user';
  currentUserRate = 0;
  movieDetails = [];
  movieComments = [];
  movieID: string = '';

  constructor(private apiService: apiServices,
              private router: Router) {
  }


  ngOnInit() {
    this.userType = localStorage.getItem('user_role');
    this.movieID = this.apiService.getSelectedMovieID();
    this.apiService.fetchMoviesDetailsByID(this.movieID).subscribe((res) => {
      this.movieDetails = res['result'][0];
    });
    this.fetchCommentsByMovie();
    this.fetchAverageStarRating();
  }

  fetchCommentsByMovie() {
    this.apiService.fetchCommentsByMovieID(this.movieID).subscribe((res) => {
      this.movieComments = res['result'];
      console.log(this.movieComments);
    });
  }

  fetchAverageStarRating() {
    this.apiService.fetchStarRatingOfMovie(this.movieID).subscribe((res) => {
      this.movieDetails['avg_ratings'] = res['result'];
      console.log(this.movieDetails['avg_ratings']);
    });
  }

  addComment() {
    this.showCommentPanel = true;
  }

  cancelComment() {
    this.showCommentPanel = false;
  }

  onAddComment(form: NgForm) {
    console.log(form.value);
    if (form.valid) {
      let uploadComment = {
        user_id: localStorage.getItem('user_id'),
        star_rating: this.currentUserRate,
        description: form.value.comment,
        movie_id: this.movieID,
        liked_count: 0,
        disliked_count: 0,
        user_name: localStorage.getItem('user_name')
      };
      this.resetForm(form);
      this.apiService.addCommentsToMovie(uploadComment)
        .subscribe((res) => {
          this.fetchCommentsByMovie();
          this.fetchAverageStarRating();
        });
    }
  }

  deleteMovie(movieID) {
    this.apiService.deleteMovie(movieID).subscribe((res) => {
      this.router.navigate(['/moviePortal']);
    });
  }

  deleteComment(commentID) {
    this.apiService.deleteComment(commentID).subscribe((res) => {
      this.router.navigate(['/moviePortal']);
    });
  }

  resetForm(form) {
    form.reset();
    this.currentUserRate = 0;
    this.showCommentPanel = false;
  }

  editMovie(movieID) {
    //
  }


}
