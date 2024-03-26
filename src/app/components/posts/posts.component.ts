import {Component, Input} from '@angular/core';
import {IPost} from "../../interfaces/post.interface";
import {PostComponent} from "../post/post.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  @Input()
  posts: IPost[]

}
