import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Merchant } from '../model/merchant.model';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient){}

  public getMerchants(country: string): Observable<Merchant[]> {
    console.log(country)
    return this.http.get<Merchant[]>(`${this.baseUrl}/merchants/find?country=${country}`);
  }
}