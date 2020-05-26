import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shop-servicetype',
  templateUrl: './shop-servicetype.page.html',
  styleUrls: ['./shop-servicetype.page.scss'],
})
export class ShopServicetypePage implements OnInit {

  constructor(
    private _location: Location,
  ) { }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

}
