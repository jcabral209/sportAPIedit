import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameSchedule } from '../interfaces/game-schedule';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  getURL(url: string): Observable<GameSchedule> {
    return this.http.get<GameSchedule>(url, { headers: {authorization: 'Basic MmVmYjkyMTItMzJlMi00MjNhLTk5M2MtMzYzNTdhOjMzMjNDYWJyYWw='}});
  }
}
