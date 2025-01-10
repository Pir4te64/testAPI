import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comments.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  comments: any[] = [];
  constructor(private commentService: CommentService) { }
  ngOnInit(): void {
    // Consultar los posts al iniciar el componente
    this.commentService.getComments().subscribe((data) => {
      this.comments = data.slice(0, 10); // Mostrar solo los primeros 10 posts
    });
  }
}
