import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  posts: any[] = []; // Array para almacenar los posts

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    // Consultar los posts al iniciar el componente
    this.postService.getPosts().subscribe((data) => {
      this.posts = data.slice(0, 10); // Mostrar solo los primeros 10 posts
    });
  }
}
