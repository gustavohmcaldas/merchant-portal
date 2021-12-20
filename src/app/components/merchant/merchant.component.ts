import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Merchant } from 'src/app/model/merchant.model';
import { MerchantService } from 'src/app/service/merchant.service';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {
  public merchants: Merchant[];
  country = 'USA';
  name = '';

  constructor(private merchantService: MerchantService){}

  ngOnInit() {
    this.getMerchants();
  }

  public getMerchants(): void {
    console.log(this.country)
    this.merchantService.getMerchants(this.country).subscribe(
      (response: Merchant[]) => {
        this.merchants = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchMerchants(key: string): void {
    const results: Merchant[] = [];
    for (const merchant of this.merchants) {
      if (merchant.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
          results.push(merchant);
      }
    }
    this.merchants = results;
    if (results.length === 0 || !key) {
      this.getMerchants();
    }
  }
}