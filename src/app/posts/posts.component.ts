import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
})
export class PostsComponent implements OnInit {
  posts: any[] = []; // Array para almacenar los posts

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    // Consultar los posts al iniciar el componente
    this.postService.getPosts().subscribe((data) => {
      this.posts = data.slice(0, 10); // Mostrar solo los primeros 10 posts
    });
  }

  copyToClipboard(url: string): void {
    navigator.clipboard.writeText(url).then(() => {
      alert('¡Enlace copiado al portapapeles!');
    });
  }
  navigateToPost(id: number): void {
    this.router.navigate([`/post/${id}`]);
  }
}
