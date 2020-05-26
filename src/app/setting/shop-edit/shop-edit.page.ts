import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.page.html',
  styleUrls: ['./shop-edit.page.scss'],
})
export class ShopEditPage implements OnInit {

  shop: any = {};

  constructor(
    private _location: Location,
    private shopService: ShopService,
    
    ) { }

  async ngOnInit() {
    this.shop = await this.shopService.getMyShop();
    console.log(this.shop);
  }

  saveShop() {
    // console.log(this.shop);
    this.shopService.updateShop(this.shop).subscribe((res: any) => {
      console.log(res);
      this._location.back();
    });
  }

  goback() {
    this._location.back();
  }

}
