import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient) { }
  getPhotos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
