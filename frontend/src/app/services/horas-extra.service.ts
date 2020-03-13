import { HorasExtra } from './../models/horas-extra';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HorasExtraService {

  selectedHoraExtra: HorasExtra;
  horas_extras: HorasExtra[];
  readonly url_back = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
    this.selectedHoraExtra = new HorasExtra();
  }

  getHorasExtras() {
      return this.http.get(this.url_back);
  }

  postHorasExtras(HoraExtra: HorasExtra) {
    return this.http.post(this.url_back, HoraExtra);
  }

  getUsers() {
      return this.http.get(`${this.url_back}users`);
  }
}
