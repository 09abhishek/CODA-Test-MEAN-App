import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../post.model';
import {NgForm} from '@angular/forms';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = 'A Title';
  enteredContent = 'Some Content';
  // @Output() postCreated = new EventEmitter<Post>();

  constructor(public postService: PostsService) { }

  ngOnInit() {
  }


  onAddPost(form: NgForm) {
    if(form.valid) {
      this.postService.addPost(form.value.title, form.value.content);
    }else {
       return
      }
       // this.postCreated.emit(post);
  }

}
