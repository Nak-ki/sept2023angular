import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/user.interface";
import {UserComponent} from "../user/user.component";
import {NgForOf, NgIf} from "@angular/common";
import {UserDetailsComponent} from "../user-details/user-details.component";
import {IPost} from "../../interfaces/post.interface";
import {PostsComponent} from "../posts/posts.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf,
    UserDetailsComponent,
    NgIf,
    PostsComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: IUser[]
  usersDetails: IUser
  posts: IPost[]
  constructor(private userService:UserService) {
  }
    ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users=value)
    }

  getUserEvent(user: IUser) {
   this.userService.getPostsById(user.id).subscribe(value => this.posts=value)
  }
}
