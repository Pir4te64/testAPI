import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-detail-component',
  imports: [],
  templateUrl: './post-detail-component.component.html',
  styleUrl: './post-detail-component.component.css'
})
export class PostDetailComponent implements OnInit {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) {}


  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(postId).subscribe((data) => {
      this.post = data;
    });
  }
  goBack(): void {
    this.location.back(); // Regresa a la página anterior
  }
}