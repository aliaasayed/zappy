import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TweetsService {
  constructor(private http: HttpClient) { }

  getTweets(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.get("http://localhost:3000/tweets", {
      headers: headers
    });
  }
}
