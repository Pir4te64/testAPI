import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-grid',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './photo-grid.component.html',
})
export class PhotoGridComponent implements OnInit{
  photos: any[] = [];
  private allPhotos: any[] = [];
  private photosPerLoad = 10;
  private currentIndex = 0;
  loadingStates: boolean[] = [];

  constructor(private photoService: PhotoService){}
 
  ngOnInit(): void {
    this.photoService.getPhotos().subscribe((data)  => {
      this.allPhotos = data;
      this.loadMorePhotos();
    })
  }

  loadMorePhotos(): void {
      const nextPhotos = this.allPhotos.slice(
        this.currentIndex,
        this.currentIndex + this.photosPerLoad
      );
      this.photos = [...this.photos, ...nextPhotos];
      this.loadingStates = [...this.loadingStates, ...Array(nextPhotos.length).fill(true)];
      this.currentIndex += this.photosPerLoad;
  }
  onImageLoad(index: number): void {
    this.loadingStates[index] = false;
  }
  onImageError(index: number): void{
    this.loadingStates[index] = false;
    this.photos[index].thumbnailUrl = "";
  }
  copyToClipboard(url: string): void {
    navigator.clipboard.writeText(url).then(() => {
      alert('¡Enlace copiado al portapapeles!');
    });
  }
}
