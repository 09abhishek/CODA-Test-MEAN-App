import {Post} from './post.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class PostsService {
  private posts: Post[];

  getPosts() {
    // return [...this.posts];
    return this.posts;
  }

  addPost(title: string, content: string) {
    const post : Post = {title :title, content : content};
    this.posts.push(post);
  }

  login(username: string, pwd: string) {
    // this.posts.push(post);
  }




}
