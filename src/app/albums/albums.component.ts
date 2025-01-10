import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
})
export class AlbumsComponent implements OnInit {
  albums: any[] = []; // Array para almacenar los álbumes

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    // Consultar los álbumes al cargar el componente
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data.slice(0, 10); // Mostrar solo los primeros 10 álbumes
    });
  }
  copyToClipboard(url: string): void {
    navigator.clipboard.writeText(url).then(() => {
      alert('¡Enlace copiado al portapapeles!');
    });
  }
}
