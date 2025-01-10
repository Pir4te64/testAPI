import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  // Método para obtener los posts
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getPostById(id: string | null): Observable<any> {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  
}
