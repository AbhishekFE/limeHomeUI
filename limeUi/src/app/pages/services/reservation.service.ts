import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '@pages/constants/url';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  saveCheckIn(data: any) {
    return this.http.post(`${environment.apiUrl}${URL.bookSuite}`, data);
  }
}
