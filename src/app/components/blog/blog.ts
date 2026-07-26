import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { Api } from '../../services/api';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [DatePipe],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

  posts: Post[] = [];

  constructor(private apiService: Api) { }

  ngOnInit(): void {
    this.fetchPosts();

  }

  fetchPosts(): void {
    this.apiService.getPosts().subscribe({
      next: (data: Post[]) => {
        this.posts = data;
      },
      error: (error) => {
        console.error(`Error fetching posts: ${error}`);
      }
    });
  }

}
