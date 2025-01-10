import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  // Método para obtener los álbumes
  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
