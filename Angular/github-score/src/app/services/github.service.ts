import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  search: any;
  private base = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getScore(name: string): any {
    this.search = this.http.get<any>(this.base + name);
    return (this.search);
  }
}
