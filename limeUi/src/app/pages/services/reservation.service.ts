import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '@pages/constants/url';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  saveCheckIn(data: any) {
    this.http.post(URL.bookSuite, data);
  }
}
