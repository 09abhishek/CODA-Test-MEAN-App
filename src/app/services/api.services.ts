import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiURL} from '../config/common-url';

@Injectable({
  providedIn : 'root'
})
export class apiServices {

  private selectedMovieID = '';

  constructor(private http: HttpClient) {
  }

  setSelectedMovieID(movieID) {
    localStorage.setItem('selectedMovieID', movieID);
    this.selectedMovieID = movieID
  }

  getSelectedMovieID() {
   return this.selectedMovieID || localStorage.getItem("selectedMovieID");
  }

  fetchAllMovies() {
    return this.http.get( apiURL +'getAllMovie');
  }

  fetchMoviesDetailsByID(movieID) {
    return this.http.get( apiURL +'getMovieDetailsByID/'+ movieID);
  }

  fetchStarRatingOfMovie(movieID) {
    return this.http.post( apiURL +'getStarRatingsOfMovie', { movie_id: movieID });
  }

  fetchCommentsByMovieID(movieID) {
    return this.http.post( apiURL +'getCommentsByMovie',  { movie_id: movieID });
  }

  addCommentsToMovie(commentBody) {
    return this.http.post( apiURL +'addCommentsToMovie',  commentBody);
  }

  searchMovie(searchParam) {
    return this.http.get( apiURL +'searchMovie',{params : {search : searchParam} });
  }

  addMovie(movieData) {
    return this.http.post( apiURL +'addMovie', movieData);
  }

  editMovie(movieData) {
    return this.http.post( apiURL +'addMovie', movieData);
  }

  deleteMovie(movieID) {
    return this.http.post( apiURL +'deleteMovieByID', { movie_id: movieID });
  }

  deleteComment(commentID) {
    return this.http.post( apiURL +'deleteCommentByID', { comment_id: commentID });
  }


}
